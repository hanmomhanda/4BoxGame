<?php
$totalClick = $_REQUEST["totalClick"];
$playerNo = $_REQUEST["playerNo"];
$cellNo = $_REQUEST["cellNo"];
$cellValue = $_REQUEST["cellValue"];
$color = $_REQUEST["color"];

$gameData = $totalClick."*". 
            $playerNo."*".
            $cellNo."*".
            $cellValue."*".
            $color;

if ( file_exists("./data/gameData.txt") ) {
	 unlink("./data/gameData.txt");
}
file_put_contents('./data/gameData.txt', $gameData, LOCK_EX);
file_put_contents('./data/gameHistoryData.txt', $gameData."\n", FILE_APPEND);
//file_put_contents('gameData.txt', $gameData);
?>