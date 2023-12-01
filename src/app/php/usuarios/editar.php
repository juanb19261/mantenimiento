<?php 
header(`Access-Control-Allow-origin: *`);
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

$editar = " UPDATE  usuarios SET Nombre='$params->Nombre', Cedula='$params->Cedula', Celular='$params->Celular', clave='$params->clave' SHA1('$params->clave' WHERE id_usuario='$params->id_usuario";
mysqli_query($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_modificados";

header("content-type: application/json");
echo json_encode($response);
?>