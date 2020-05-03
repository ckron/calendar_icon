<?php header("Content-Type: text/html; charset=UTF-8");?>
<?php
$yotei = $_GET['yotei'];
$month = $_GET['month'];
$day = $_GET['day'];
$note = $_GET['note'];
?>
<title><?php echo ${yotei} ?></title>


<link rel="apple-touch-icon" href=<?php echo "icon/icon_${month}_${day}.jpg"?>>

<body onLoad="pDate()">
<form action="test.php" method="GET" name="myFORM">
<input type="text" name="yotei" size="30" maxlength="20" value=<?php echo ${yotei}?>><br>
月を入力<br>
<input type="text" name="month" size="6" maxlength="4" value=<?php echo ${month}?>><br>
日を入力<br>
<input type="text" name="day" size="6" maxlength="4" value=<?php echo ${day}?>><br>
<textarea name="note"><?php echo ${note}?></textarea><br>
<input type="submit" value="送信"><br>
</form>
</body>