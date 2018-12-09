<?php
header( 'Location: http://localhost/SpaceT/#pageContact' ) ;
$emailErr = "";
$email = "";
if (empty($_POST["email"])) {
  $emailErr = "Email is required";
} else {
  $email = test_input($_POST["email"]);
  // check if e-mail address is well-formed
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $emailErr = "Invalid email format";
  }
}
?>