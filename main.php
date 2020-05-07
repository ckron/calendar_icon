<?php header("Content-Type: text/html; charset=UTF-8");?>
<?php
$yotei = htmlspecialchars($_GET['yotei'], ENT_QUOTES, "UTF-8");
$month = htmlspecialchars($_GET['month'], ENT_QUOTES, "UTF-8");
$day = htmlspecialchars($_GET['day'], ENT_QUOTES, "UTF-8");
$note = htmlspecialchars($_GET['note'], ENT_QUOTES, "UTF-8");
?>
<title><?php echo $yotei?></title>


<link rel="apple-touch-icon" href=<?php echo "icon/icon_$month_$day.jpg"?>>

<body onLoad="pDate()">
<form action="main.php" method="GET" name="myFORM">
<input type="text" name="yotei" size="30" maxlength="20" value=<?php echo $yotei?>><br>
月を入力<br>
<input type="text" name="month" size="6" maxlength="4" value=<?php echo $month?>><br>
日を入力<br>
<input type="text" name="day" size="6" maxlength="4" value=<?php echo $day?>><br>
メモ<br>
<textarea name="note"><?php echo $note?></textarea><br>
<input type="submit" value="送信"><br>
</form>
</body>