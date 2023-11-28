<?php 
header(`Access-Control-Allow-origin: *`);
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

$editar = " UPDATE  compras SET cantidad='$params->cantidad', subtotal='$params->subtotal', Total='$params->Total', id_producto='$params->id_producto'  WHERE id_compras='$params->id_compras";
mysqli_query($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_modificados";

header("content-type: application/json");
echo json_encode($response);
?>