<?php
session_name("SESJA4");
//$SID = "96de90f89b630dbafcd32891673ca748ss";
session_id($_GET["SID"]);
session_start();
//session_regenerate_id();
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Bank</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<body>

<?php
echo session_id()."<br>\n";
echo session_name()."<br>\n";
?>

<h3>Session cookie</h3>
<?php
echo $_COOKIE["SESJA4"];
?>

</body>
</html>