<?php 
header(`Access-Control-Allow-origin: *`);
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

//$ins = "INSERT INTO clientes (Nombre_apellidos, Cedula, Direccion, Ciudad, Celular) VALUES ('juan', 234334, calle 23, cali, 3112347898)"
$ins = "INSERT INTO  clientes (Nombre_apellidos, Cedula, Direccion, Ciudad, Celular) VALUES ('$params->Nombre_apellidos', '$params->Cedula', '$params->Direccion', '$params->Ciudad','$params->Celular')";



mysqli_query($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_grabados";


header("content-type: application/json");
echo json_encode($response);
?>