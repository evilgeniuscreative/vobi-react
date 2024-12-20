<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$route = $_SERVER['REQUEST_URI'];
$route = parse_url($route, PHP_URL_PATH);
$response = ['status' => 'error', 'message' => 'Invalid route'];

switch ($route) {
    case '/addCommercial':
        $response = handleAddCommercial();
        break;
    case '/addCharacter':
        $response = handleAddCharacter();
        break;
    case '/pauseCommercial':
        $response = handlePauseCommercial();
        break;
    case '/pauseCharacter':
        $response = handlePauseCharacter();
        break;
    case '/DLCommercial':
        $response = handleDLCommercial();
        break;
    case '/DLCharacter':
        $response = handleDLCharacter();
        break;
    case '/DLResume':
        $response = handleDLResume();
        break;
    case '/VResume':
        $response = handleVResume();
        break;
}

echo json_encode($response);

function handleAddCommercial() {
    $data = json_decode(file_get_contents('php://input'), true);
    // Add your commercial logic here
    return ['status' => 'success', 'message' => 'Commercial added'];
}

function handleAddCharacter() {
    $data = json_decode(file_get_contents('php://input'), true);
    // Add your character logic here
    return ['status' => 'success', 'message' => 'Character added'];
}

function handlePauseCommercial() {
    // Add pause commercial logic
    return ['status' => 'success', 'message' => 'Commercial paused'];
}

function handlePauseCharacter() {
    // Add pause character logic
    return ['status' => 'success', 'message' => 'Character paused'];
}

function handleDLCommercial() {
    // Add download commercial logic
    return ['status' => 'success', 'message' => 'Commercial downloaded'];
}

function handleDLCharacter() {
    // Add download character logic
    return ['status' => 'success', 'message' => 'Character downloaded'];
}

function handleDLResume() {
    // Add download resume logic
    return ['status' => 'success', 'message' => 'Resume downloaded'];
}

function handleVResume() {
    // Add view resume logic
    return ['status' => 'success', 'message' => 'Resume viewed'];
}
?>