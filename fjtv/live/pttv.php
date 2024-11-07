<?php
$id = isset($_GET['id'])?$_GET['id']:'pttv1';
$n = array(
    'pttv1' => 4, //莆田1套
    'pttv2' => 5, //莆田2套
    'ptxy' => 6, //莆田仙游
    );
$tm =time();
$sign = md5("f33ba15effa5c10e873bf3842afb46a6&YWFkZDYwMjNkNzMzNzUwZWJjYjE4NWFjZjY3YmQyYzE=&1.0.0&".$tm);
$h = array(
    "X-API-KEY:f33ba15effa5c10e873bf3842afb46a6",
    "X-API-TIMESTAMP: $tm",
    "X-API-VERSION: 1.0.0",
    "X-AUTH-TYPE: md5",
    "X-API-SIGNATURE: $sign",
    );
$m = curl_init('https://www.ptbtv.com/m2o/channel/channel_info.php?channel_id='.$n[$id]);
curl_setopt($m, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($m, CURLOPT_HTTPHEADER, $h);
curl_setopt($m, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($m, CURLOPT_SSL_VERIFYHOST, FALSE);
$d = curl_exec($m);
curl_close($m);
$playurl = json_decode($d)[0]->m3u8;
header('Location:'.$playurl);
//echo $playurl;
?>
