<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

$id = $_GET['id'];

require ("../conexion.php");

$editar = " UPDATE  compras SET fecha='$params->fecha' cantidad='$params->cantidad', subtotal='$params->subtotal', iva='$params->iva', total='$params->total', fo_usuario='$params->fo_usuario', fo_producto='$params->fo_producto', fo_proveedor='$params->fo_proveedor'  WHERE id_compras='$id'";

mysqli_query($conexion,$editar) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_modificados";

header("content-type: application/json");
echo json_encode($response);
?>