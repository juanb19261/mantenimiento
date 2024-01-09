<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

$editar = " UPDATE  producto SET Nombre='$params->Nombre', valor_compra='$params->valor_compra', valor_venta='$params->valor_venta', fo_inventario='$params->fo_inventario', fo_proveedor='$params->fo_proveedor', fo_marca='$params->fo_marca' WHERE id_producto='$params->id_producto')";
mysqli_query($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_modificados";

header("content-type: application/json");
echo json_encode($response);
?>