<?php
$IsPostFormData = (isset($_POST["sent"]) && ($_POST["sent"]=="y"));
$IsGetFormData = (isset($_GET["sent"]) && ($_GET["sent"]=="y"));
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Exercise 2 Set 7</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
td,th,body { font-family:Verdana, Arial, Helvetica, sans-serif; font-size:10pt; }
span.error {color: red;}
</style>
</head>

<body>

<?php

$cardNumErr = $expMonthErr = $expYearErr = $cvcNumErr = $fNameErr = $lNameErr = $emailErr = $phoneNumErr = $paymentAmountErr = "";

    if($IsGetFormData) {
        if(empty($_GET["cardNum"])){
            $cardNumErr = "This field is required.";
        }else if(!preg_match("/^[0-9]{16}$/", $_GET["cardNum"])){
            $cardNumErr = "Invalid card number.";
        }
        if(empty($_GET["expDate"][0])){
            $expMonthErr = "This field is required.";
        }else if(!preg_match("/^0[1-9]{1}|1[0-2]{1}$/", $_GET["expDate"][0])){
            $expMonthErr = "Invalid expiry month.";
        }
        if(empty($_GET["expDate"][1])){
            $expYearErr = "This field is required.";
        }else if(!preg_match("/^2[1-9]{1}|[3-9]{1}[0-9]{1}$/", $_GET["expDate"][1])){
            $expYearErr = "Invalid expiry year.";
        }
        if(empty($_GET["cvcNum"])){
            $cvcNumErr = "This field is required.";
        }else if(!preg_match("/^[0-9]{3}$/", $_GET["cvcNum"])){
            $cvcNumErr = "Invalid CVC number.";
        }
        if(empty($_GET["name"][0])){
            $fNameErr = "This field is required.";
        }else if(!preg_match("/^[A-Za-z]*$/", $_GET["name"][0])){
            $fNameErr = "Name can only contain letters.";
        }
        if(empty($_GET["name"][1])){
            $lNameErr = "This field is required.";
        }else if(!preg_match("/^[A-Za-z]*$/", $_GET["name"][1])){
            $lNameErr = "Name can only contain letters.";
        }
        if(empty($_GET["email"])){
            $emailErr = "This field is required.";
        }else if(!filter_var($_GET["email"], FILTER_VALIDATE_EMAIL)){
            $emailErr = "Invalid email address.";
        }
        if(empty($_GET["phoneNum"])){
            $phoneNumErr = "This field is required.";
        }else if(!preg_match("/^[0-9]{9}$/", $_GET["phoneNum"])){
            $phoneNumErr = "Invalid phone number.";
        }
        if(empty($_GET["paymentAmount"])){
            $paymentAmountErr = "This field is required.";
        }else if(!preg_match("/^[0-9]+\.([0-9]{2})$/", $_GET["paymentAmount"])){
            $paymentAmountErr = "Invalid payment amount.";
        }
    }

?>

<h3 align="center">Bank trasnfer</h3>

<form name="dane" action="E2.php" method="get">
<table align="center" cellpadding="4" cellspacing="2" border="0" bgcolor="#FF9900">
<tr><th align="left">Card number:</th><td><input name="cardNum" type="text" size="20" maxlength="16" value=<?php echo (isset( $_GET["cardNum"] ) ? $_GET["cardNum"] : "");?>></td></tr>
                                          <tr><th align="right"><span class="error"><?php echo $cardNumErr;?></span></th></tr>
<tr><th align="left">Expiry date:</th><td><input name="expDate[]" type="string" size="2" maxlength="2" value=<?php echo (isset( $_GET["expDate"][0] ) ? $_GET["expDate"][0] : "");?>>
                                          /
                                          <input name="expDate[]" type="string" size="2" maxlength="2" value=<?php echo (isset( $_GET["expDate"][1] ) ? $_GET["expDate"][1] : "");?>></td></tr>
                                          <tr><th align="right"><span class="error"><?php echo $expMonthErr;?></span><span class="error"><?php echo $expYearErr;?></span></th></tr>
<tr><th align="left">CVC number:</th><td><input name="cvcNum" type="text" size="2" maxlength="3" value=<?php echo (isset( $_GET["cvcNum"] ) ? $_GET["cvcNum"] : "");?>></td></tr>
                                         <tr><th align="right"><span class="error"><?php echo $cvcNumErr;?></span></th></tr>
<tr><th align="left">First name:</th><td><input name="name[]" type="text" size="20" maxlength="20" value=<?php echo (isset( $_GET["name"][0] ) ? $_GET["name"][0] : "");?>></td></tr>
                                         <tr><th align="right"><span class="error"><?php echo $fNameErr;?></span></th></tr>
<tr><th align="left">Last name:</th><td><input name="name[]" type="text" size="20" maxlength="40" value=<?php echo (isset( $_GET["name"][1] ) ? $_GET["name"][1] : "");?>></td></tr>
                                        <tr><th align="right"><span class="error"><?php echo $lNameErr;?></span></th></tr>
<tr><th align="left">E-mail address:</th><td><input name="email" type="text" size="20" maxlength="30" value=<?php echo (isset( $_GET["email"] ) ? $_GET["email"] : "");?>></td></tr>
                                             <tr><th align="right"><span class="error"><?php echo $emailErr;?></span></th></tr>
<tr><th align="left">Phone number:</th><td><input name="phoneNum" type="text" size="20" maxlength="9" value=<?php echo (isset( $_GET["phoneNum"] ) ? $_GET["phoneNum"] : "");?>></td></tr>
                                           <tr><th align="right"><span class="error"><?php echo $phoneNumErr;?></span> </th></tr>
<tr><th align="left">Payment amount:</th><td><input name="paymentAmount" type="text" size="20" maxlength="20" value=<?php echo (isset( $_GET["paymentAmount"] ) ? $_GET["paymentAmount"] : "");?>></td></tr>								   
                                             <tr><th align="right"><span class="error"><?php echo $paymentAmountErr;?></span></th></tr>
<tr><td align="right" colspan="2"><input type="submit" value="Send"></td></tr>
</table>
<input name="sent" type="hidden" value="y">
</form>

<?php
if ( $IsGetFormData ):
?>
<table cellpadding="4" cellspacing="2" border="1" align="center">
<tr><th>Card number:</th><td><?php echo $_GET["cardNum"]; ?></td></tr>
<tr><th>Expiry date:</th><td><?php echo join($_GET["expDate"], "/"); ?></td></tr>
<tr><th>CVC number:</th><td><?php echo $_GET["cvcNum"]; ?></td></tr>
<tr><th>Name:</th><td><?php echo join($_GET["name"], " "); ?></td></tr>
<tr><th>E-mail address:</th><td><?php echo $_GET["email"]; ?></td></tr>
<tr><th>Phone number:</th><td><?php echo $_GET["phoneNum"]; ?></td></tr>
<tr><th>Payment amount:</th><td><?php echo $_GET["paymentAmount"]; ?></td></tr>
</table>
<?php
endif;
?>

</body>
</html>