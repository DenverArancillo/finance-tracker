<?php
try{
	$options = [
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
	];
    $pdo = new PDO(
        'mysql:host=127.0.0.1;dbname=finance',
        'root',
        'synthainDV@*28', 
        $options
    );
}catch(PDOException $e){
    echo $e;
    exit();
}
?>