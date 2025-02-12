<?php
header('Content-Type: text/plain; charset=utf-8');
function fetchData($url, $isHTML = false)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");
    if ($isHTML) {
        curl_setopt($ch, CURLOPT_HTTPHEADER, ["Accept-Charset: UTF-8"]);
    }

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($httpCode == 200) {
        return $isHTML ? mb_convert_encoding($response, 'HTML-ENTITIES', 'UTF-8') : $response;
    } else {
        return false;
    }
}
function parseChannelsFromHTML($html)
{
    $dom = new DOMDocument('1.0', 'UTF-8');
    libxml_use_internal_errors(true);
    $dom->loadHTML('<?xml encoding="UTF-8">' . $html);
    libxml_clear_errors();

    $xpath = new DOMXPath($dom);
    $tableMenu = $xpath->query("//div[@id='TableMenu']")->item(0);

    $channels = [];
    if ($tableMenu) {
        foreach ($tableMenu->getElementsByTagName('a') as $aTag) {
            $channelid = $aTag->getAttribute('channelid');
            $asset = $aTag->getAttribute('asset');
            $title = $aTag->getAttribute('title');
            if (empty($channelid) || empty($asset) || empty($title)) {
                error_log("警告：缺少某些属性 - ChannelID: $channelid, Asset: $asset, Title: $title");
                continue;
            }
            if (strpos($asset, 'fast-live') === 0) {
                continue;
            }

            $channels[] = [
                'channelid' => $channelid,
                'asset' => $asset,
                'title' => $title
            ];
        }
    }
    return $channels;
}
if (isset($_GET['id']) && isset($_GET['pid'])) {
    $id = urlencode($_GET['id']);
    $pid = urlencode($_GET['pid']);
    $url = "https://4gtv.luckytv.us.kg/?id=$id&pid=$pid";
    $content = fetchData($url);

    if ($content) {
        $lines = explode("\n", trim($content));
        $lastLine = end($lines);
        $content = fetchData($lastLine);

        if ($content) {
            echo $content;
        } else {
            echo "无法获取内容";
        }
    } else {
        echo "无法获取内容";
    }
} else {
    $url = "https://www.4gtv.tv/channel/4gtv-4gtv003?set=1&ch=1";
    $html = fetchData($url, true);
    if ($html) {
        $channels = parseChannelsFromHTML($html);
        if (!empty($channels)) {
            foreach ($channels as $channel) {
                echo "{$channel['title']},http://127.0.0.1/4gtv.php?id={$channel['asset']}&pid={$channel['channelid']}\n";
            }
        } else {
            echo "未找到符合条件得视频资料。";
        }
    } else {
        echo "无法获取网页内容。";
    }
}
?>