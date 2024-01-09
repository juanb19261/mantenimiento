<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

// $ins = "INSERT INTO usuarios (Nombre, usuario, clave, tipo) VALUES ('juan', 'juan2', SHA1('12345'), 'invitado')";
$ins = "INSERT INTO  usuarios(Nombre, usuario, clave, tipo) VALUES ('$params->Nombre', '$params->usuario', SHA1('$params->clave'),'$params->tipo')";


mysqli_query ($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_grabados";


header("content-type: application/json");
echo json_encode($response);
?>