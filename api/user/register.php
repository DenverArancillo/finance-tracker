<?php
$post = file_get_contents("php://input");
if(empty($post)){
    exit('empty post');
}

include_once('../db/sql.php');
header('Content-type: application/json');
$post = json_decode($post, true);

// check for identical username

$q_user = 'INSERT INTO users(name, password) VALUES(:user, :pass)';
$pdo->beginTransaction();
$result = $pdo->prepare($q_user)
        ->execute([
            'user' => htmlspecialchars($post['name']),
            'pass' => htmlspecialchars($post['pass'])
        ]);
$pdo->commit();
echo json_encode([
    'result' => $result,
]);
?>