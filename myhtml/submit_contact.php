<?php
// SQL Server connection details
$serverName = "localhost"; // or "YOUR_SERVER_NAME"
$connectionOptions = [
    "Database" => "YourDatabaseName",
    "Uid" => "YourUsername",
    "PWD" => "YourPassword"
];

// Get form values
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Connect to SQL Server
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    die(print_r(sqlsrv_errors(), true));
}

// Insert query using parameters (to prevent SQL injection)
$sql = "INSERT INTO ContactMessages (Name, Email, Message) VALUES (?, ?, ?)";
$params = [$name, $email, $message];

$stmt = sqlsrv_query($conn, $sql, $params);

if ($stmt) {
    echo "Message sent successfully!";
} else {
    echo "Error inserting data.";
    print_r(sqlsrv_errors());
}

sqlsrv_close($conn);
?>
