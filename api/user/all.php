<?php
include_once('../db/sql.php');
header('Content-type: application/json');

$q_all = 'SELECT * FROM users';

$result = $pdo->prepare($q_all);
$result->execute();

echo json_encode(['result' => $result->fetchAll()]);    
?>