<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

//$ins = "INSERT INTO compras (Cantidad,  subtotal, Total) VALUES (2, 3, 5,)"
$ins = "INSERT INTO  compras(fecha, cantidad, subtotal, iva, total, fo_usuario, fo_producto, fo_proveedor) VALUES ('$params->fecha','$params->cantidad', '$params->subtotal', '$params->iva', '$params->total, '$params->fo_usuario', '$params->fo_producto', '$params->fo_proveedor')";



mysqli_query($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_grabados";


header("content-type: application/json");
echo json_encode($response);
?>