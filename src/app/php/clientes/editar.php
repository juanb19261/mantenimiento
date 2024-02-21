<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

$id = $_GET['id'];

require ("../conexion.php");

$editar = "UPDATE clientes SET codigo='$params->codigo', nombre='$params->nombre', Direccion='$params->Direccion', email='$params->email', Celular='$params->Celular' WHERE id_cliente='$id'";
mysqli_query($conexion,$editar) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_modificados";

header("content-type: application/json");
echo json_encode($response);
?>