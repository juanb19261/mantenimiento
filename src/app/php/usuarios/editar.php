<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

$id= $_GET['id'];

require ("../conexion.php");

$editar = " UPDATE  usuarios SET Nombre='$params->Nombre', usuario='$params->usuario', clave='$params->clave', SHA1('$params->clave', tipo='$params->tipo' WHERE id_usuario=$id";
mysqli_query($conexion,$ins) or die ('no edito');

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_modificados";

header("content-type: application/json");
echo json_encode($response);
?>