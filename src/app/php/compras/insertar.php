<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

//$ins = "INSERT INTO compras (Cantidad,  subtotal, Total) VALUES (2, 3, 5,)"
$ins = "INSERT INTO  compras (Cantidad,  subtotal, Total) VALUES ('$params->Cantidad', '$params->subtotal', '$params->Total')";



mysqli_query($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_grabados";


header("content-type: application/json");
echo json_encode($response);
?>