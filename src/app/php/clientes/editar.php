<?php 
header(`Access-Control-Allow-origin: *`);
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

$editar = " UPDATE  clientes SET Nombre_apellido,='$params->Nombre_apellidos', Cedula='$params->Cedula', Direccion='$params->Direccion', Ciudad='$params->Ciudad', Celular='$params->Celular' WHERE id_cliente='$params->id_cliente";
mysqli_query($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_modificados";

header("content-type: application/json");
echo json_encode($response);
?>