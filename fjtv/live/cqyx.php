<?php
date_default_timezone_set("Asia/Shanghai");
$quality = empty($_GET['quality']) ? "hd" : trim($_GET['quality']);
$channel = empty($_GET['id']) ? "CCTV4K" : trim($_GET['id']);
$jishu = 1;
$t = get_total_millisecond();
if ($channel == "list") {
    $key = "aIErXY1rYjSpjQs7pq2Gp5P8k2W7P^Y@appIdkdds-chongqingdemocatalogIdquanbucityId5AdeviceIdchongqingdemopageIndex1pageSize200timestamps" . $t;
    $sign = md5($key);
    $liveurl = "http://portal.centre.bo.cbnbn.cn/live/channel/live/list?catalogId=quanbu&cityId=5A&deviceId=chongqingdemo&pageIndex=1&pageSize=200";
    $channelIDArr = json_decode(get_live_url($liveurl, $sign, $t), true);
    foreach ($channelIDArr['data']['results'] as $channelArr) {
        echo $jishu . "---" . $channelArr['channelName'] . "," . "http://xxx.xxx.xxx/cqyx.php?id=" . $channelArr['channelId'] . "</br>";
        $jishu++;
    }
    echo "120---CCTV5+高清,http://xxx.xxx.xxx/cqyx.php?id=cctv5SportHD";
    exit();
} else {
    $key = "aIErXY1rYjSpjQs7pq2Gp5P8k2W7P^Y@appIdkdds-chongqingdemocityId5AplayId" . $channel . "relativeId" . $channel . "timestamps" . $t . "type1";
    $sign = md5($key);
    $liveurl = "http://portal.centre.bo.cbnbn.cn/others/common/playUrlNoAuth?cityId=5A&playId=$channel&relativeId=$channel&type=1";
}
function get_total_millisecond()
{
    $time = new DateTime();
    return $time->getTimestamp() * 1000 + intval($time->format('u') / 1000);
}

function get_live_url($liveurl, $sign, $t)
{
    $headers = array(
        'appId: kdds-chongqingdemo',
        "sign: $sign",
        "timestamps: $t",
        'User-Agent: okhttp/3.12.12',
        'Host: portal.centre.bo.cbnbn.cn',
        'Content-Type: application/json;charset=utf-8',
        'Accept: */*',
        'Connection: keep-alive'
    );
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $liveurl);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);
    $content = curl_exec($ch);
    curl_close($ch);
    return $content;
}

$realurl = json_decode(get_live_url($liveurl, $sign, $t), true);
$playarr = $realurl['data']['result']['protocol'][0]["transcode"];
switch ($quality) {
    case "hd":
        $realquality = "hd";
        break;
    case "md":
        $realquality = "md";
        break;
    case "ld":
        $realquality = "ld";
        break;
    default:
        $realquality = "hd";
}
foreach ($playarr as $qualityvalue) {
    if (in_array($realquality, $qualityvalue)) {
        $playurl = $qualityvalue["url"];
    }
};
header("Location: $playurl");