<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

$id = $_GET['id'];

require ("../conexion.php");

$editar = " UPDATE  ventas SET cantidad='$params->cantidad', subtotal='$params->subtotal', iva='$params->iva', total='$params->total', fo_usuarios='$params->fo_usuarios', fo_producto='$params->fo_producto', fo_clientes='$params->fo_clientes'  WHERE id_ventas='$id'";

mysqli_query($conexion,$editar) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_modificados";

header("content-type: application/json");
echo json_encode($response);
?>