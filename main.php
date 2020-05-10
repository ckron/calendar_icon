<?php header("Content-Type: text/html; charset=UTF-8");?>
<?php
$yotei = htmlspecialchars($_GET['yotei'], ENT_QUOTES, "UTF-8");
$month = htmlspecialchars($_GET['month'], ENT_QUOTES, "UTF-8");
$day = htmlspecialchars($_GET['day'], ENT_QUOTES, "UTF-8");
$note = htmlspecialchars($_GET['note'], ENT_QUOTES, "UTF-8");
?>

<head>
    <title><?php echo ${yotei}?></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="apple-mobile-web-app-capable" content="no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=10.0, user-scalable=yes">
    <link rel="apple-touch-icon" href=<?php echo "icon/icon_${month}_${day}.jpg"?>>
    <link rel="stylesheet" href="main.css"/>
</head>

<body onLoad="pDate()">
    <form action="main.php" method="GET" name="myFORM">
        <p>
            予定登録(*は必須)<br>
            <input type="text" name="yotei" maxlength="20" placeholder="* 予定名を入力" value=<?php echo ${yotei}?> required><br>
            <input type="text" name="month" maxlength="4" placeholder="* 月を入力" value=<?php echo ${month}?> required><br>
            <input type="text" name="day" maxlength="4" placeholder="* 日を入力" value=<?php echo ${day}?> required><br>
            <textarea name="note" placeholder="メモを入力"><?php echo ${note}?></textarea><br>
            <input type="submit" value="送信" class="sbutton">
        </p>
    </form>
</body>