<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

$editar = " UPDATE  inventario SET Cantidad='$params->Cantidad', fo_proveedor='$params->fo_proveedor', fo_usuario='$params->fo_usuario', fo_cliente='$params->fo_cliente' WHERE id_inventario='$params->id_inventario";
mysqli_query($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_modificados";

header("content-type: application/json");
echo json_encode($response);
?>