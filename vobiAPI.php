<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Database connection
$host = '162.241.230.55';
$dbname = 'evilgeo2_vobi';
$user = 'evilgeo2_vobistats';
$pass = 'M!oIHvxR#FtO6s1r';
$port = '3306';

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //  echo json_encode(['status' => 'success', 'message' => 'Connected to the database successfully']);

} catch(PDOException $e) {
    echo json_encode(['status' => 'errorx', 'message' => 'Connection failed: ' . $e->getMessage()]);
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT * FROM stats");
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['status' => 'success', 'data' => $results]);
} catch(PDOException $e) {
    echo json_encode(['status' => 'errory', 'message' => $e->getMessage()]);
}
?>