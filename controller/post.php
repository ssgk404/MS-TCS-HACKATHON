<?php
require_once("../config.php");
$db_handle = new DBController();
$date = date("j-M-y h:i a");
$action = $_POST["action"];
$ip = $_SERVER['REMOTE_ADDR'];

if(!empty($action)) {
	switch($action) {
		case "add":
			$result = "INSERT INTO contact_us (name,email,mobile, message, date_time, ip_address) VALUES('".$_POST["name"]."','".$_POST["email"]."','".$_POST["contact"]."','".$_POST["message"]."', '$date', '$ip')";
			$reult= $db_handle->insertQuery($result);
			
			if($result){
				  $insert_id = mysql_insert_id();
				echo 'Thank you for contacting. A copy of this is sent to your email id.';					
			}
			break;
	}
}
?>