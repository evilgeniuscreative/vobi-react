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
$user = 'vobistats';
$pass = 'M!oIHvxR#FtO6s1r';
$port = '3306';

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $e->getMessage()]);
    exit;
}

$route = $_SERVER['REQUEST_URI'];
$route = parse_url($route, PHP_URL_PATH);
$response = ['status' => 'error', 'message' => 'Invalid route'];

switch ($route) {
    case '/addCommercial':
        $response = updateStat('addCommercial');
        break;
    case '/addCharacter':
        $response = updateStat('addCharacter');
        break;
    case '/pauseCommercial':
        $response = updateStat('pauseCommercial');
        break;
    case '/pauseCharacter':
        $response = updateStat('pauseCharacter');
        break;
    case '/DLCommercial':
        $response = updateStat('DLCommercial');
        break;
    case '/DLCharacter':
        $response = updateStat('DLCharacter');
        break;
    case '/DLResume':
        $response = updateStat('DLResume');
        break;
    case '/VResume':
        $response = updateStat('VResume');
        break;
}

echo json_encode($response);

function updateStat($statName) {
    global $pdo;
    try {
        $stmt = $pdo->prepare("UPDATE stats SET count = count + 1 WHERE stat_name = ?");
        $stmt->execute([$statName]);
        
        if ($stmt->rowCount() === 0) {
            // If no row was updated, insert a new one
            $stmt = $pdo->prepare("INSERT INTO stats (stat_name, count) VALUES (?, 1)");
            $stmt->execute([$statName]);
        }
        
        // Get the current count
        $stmt = $pdo->prepare("SELECT count FROM stats WHERE stat_name = ?");
        $stmt->execute([$statName]);
        $count = $stmt->fetchColumn();
        
        return [
            'status' => 'success', 
            'message' => "$statName updated successfully",
            'count' => $count
        ];
    } catch(PDOException $e) {
        return ['status' => 'error', 'message' => $e->getMessage()];
    }
}
?>