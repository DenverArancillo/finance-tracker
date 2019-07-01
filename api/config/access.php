<?php
if(empty($_POST)){
    exit('empty post');
}

include_once('../db/sql.php');


$name = htmlspecialchars($_POST['user']);
$password = htmlspecialchars($_POST['pass']);

$q_user = 'SELECT * FROM users WHERE name = :username AND password = :pass LIMIT 1';

$users = $pdo->prepare($user)
            ->execute([$name, $password])
            ->fetch();

print_r($users);
?>