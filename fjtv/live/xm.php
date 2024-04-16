<?php
$id = isset($_GET['id'])?$_GET['id']:'xmws';
$n = array(
  'xmws' => 84,
  'xm1' => 16,
  'xm2' => 17,
  'xm3' => 18,
  'xm4' => 53,
  'xmyd' => 52
  );
if (empty($_GET['ts'])){
$url = 'http://mapi1.kxm.xmtv.cn/api/v1/channel.php?channel_id='.$n[$id];
$m3u8 = json_decode(getdata($url,1))[0]->channel_stream[0]->m3u8;
if($id=='xmyd'){
$burl = preg_split('/\/clwjf/',$m3u8)[0];
print_r(preg_replace("/(.*?.ts)/i","kxm.php?ts=$burl$1",getdata($m3u8,1)));
} else {
$burl = preg_split('/cn\//',$m3u8)[0]."cn/";
print_r(preg_replace("/\.\.\/\.\.\//", "", preg_replace("/(.*?.ts)/i","kxm.php?ts=$burl$1",getdata($m3u8,1))));
 }
 } else {
  $ts = getdata($_GET['ts'],0);
  echo $ts;
  };

function getdata($purl,$type){
    $h = array(
    "User-Agent: Mozilla/5.0 (Windows NT 6.1)",
    "Referer: https://kxmapp.mapi1.kxm.xmtv.cn/",             
    );  
    $cm = curl_init($purl);
    curl_setopt($cm, CURLOPT_RETURNTRANSFER, $type);
    curl_setopt($cm, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($cm, CURLOPT_HTTPHEADER, $h);
    curl_setopt($cm, CURLOPT_REFERER, 'https://kxmapp.mapi1.kxm.xmtv.cn/');
    curl_setopt($cm, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($cm, CURLOPT_SSL_VERIFYHOST, FALSE);
    $data = curl_exec($cm);
    curl_close($cm);
    return $data;
}

?>