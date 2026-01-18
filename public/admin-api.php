<?php
// Allow React to talk to this PHP file
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// --- CONFIGURATION ---
$inventoryFile = 'inventory.json';
// ⚠️ CHANGE THIS PASSWORD BEFORE GIVING TO CLIENT
$ADMIN_PASS = "SecretPassword123"; 

// Handle Pre-flight requests (React sometimes checks connection first)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Get the data sent from React
$input = json_decode(file_get_contents("php://input"), true);

// 1. SECURITY CHECK
if (!isset($input['password']) || $input['password'] !== $ADMIN_PASS) {
    http_response_code(401);
    echo json_encode(["error" => "Wrong password"]);
    exit;
}

// 2. SAVE DATA
if (isset($input['action']) && $input['action'] === 'save') {
    if (isset($input['data'])) {
        // Write the new list to the file
        if (file_put_contents($inventoryFile, json_encode($input['data'], JSON_PRETTY_PRINT))) {
            echo json_encode(["success" => true, "message" => "Inventory saved successfully!"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Could not write to file. Check permissions."]);
        }
    } else {
        echo json_encode(["error" => "No data provided"]);
    }
} else {
    echo json_encode(["error" => "Invalid action"]);
}
?>