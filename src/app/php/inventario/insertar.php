<?php 
header(`Access-Control-Allow-origin: *`);
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

//$ins = "INSERT INTO inventario (Cantidad, fo_proveedor, fo_usuario, fo_cliente) VALUES (2, 1, 4, 3)"
$ins = "INSERT INTO  inventario (Cantidad,  fo_proveedor, fo_usuario, fo_cliente) VALUES ('$params->Cantidad', '$params->fo_proveedor', '$params->fo_usario',' $params->fo_cliente')";



mysqli_query($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_grabados";


header("content-type: application/json");
echo json_encode($response);
?>