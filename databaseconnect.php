<?php
$servername = "localhost";
$database = "u465994979_Szkolna";
$username = "u465994979_user";
$password = "bednarSQL21";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_close($conn);
?>