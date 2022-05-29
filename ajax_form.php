<?php
if(!empty($_POST['namemodal']) and !empty($_POST['datemodal']) and !empty($_POST['timemodal']) and !empty($_POST['numbermodal']) and !empty($_POST['politicmodal'])) {
    $namemodal = trim(strip_tags($_POST["namemodal"]));
    $datemodal = $_POST["datemodal"];
    $timemodal = $_POST["timemodal"];
    $numbermodal = strip_tags($_POST["numbermodal"]);
    $guestmodal = $_POST["guestmodal"];
    
    $db_host = "localhost"; 
    $db_user = "root"; // Логин БД
    $db_password = ""; // Пароль БД
    $db_base = 'lens'; // Имя БД
    try {
        $con = new PDO("mysql:host=$db_host;dbname=$db_base", $db_user, $db_password);
        $con->exec("set names utf8");
        $data = array( 'namemodal' => $namemodal,'datemodal' => $datemodal,'timemodal' => $timemodal, 'numbermodal' => $numbermodal,'guestmodal' => $guestmodal); 
        $query = $con->prepare("INSERT INTO `modal` (namemodal, datemodal, timemodal, numbermodal, guestmodal) values (:namemodal,:datemodal,:timemodal, :numbermodal,:guestmodal)");
        $query->execute($data);
        $result = array( 
        'namemodal' => $namemodal,
        'datemodal' => $datemodal,
        'timemodal' => $timemodal,
        'numbermodal' => $numbermodal,
        'guestmodal' => $guestmodal,
    ); 
    } catch (PDOException $e) {
        print "Ошибка!: " . $e->getMessage() . "<br/>";
    }
    echo json_encode($result);
}