<?php 
header(`Access-Control-Allow-origin: *`);
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

//$ins = "INSERT INTO proveedor (Nit, razon_social, Celular,) VALUES ('juan', 234334, 12345677, SHA1('12345'))"
$ins = "INSERT INTO  proveedor (Nit, razon_social, Celular) VALUES ('$params->Nit', '$params->razon_social', '$params->Celular')";



mysqli_query($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_grabados";


header("content-type: application/json");
echo json_encode($response);
?>