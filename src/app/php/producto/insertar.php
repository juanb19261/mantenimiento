<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents ("php://input");

$params = json_decode($json);

require ("../conexion.php");

// $ins = "INSERT INTO usuarios (Nombre, usuario, clave, tipo) VALUES ('juan', 'juan2', SHA1('12345'), 'invitado')";
$ins = "INSERT INTO  producto(codigo, nombre, v_compra, v_venta, stock, fo_cate) VALUES ('$params->codigo', '$params->nombre', '$params->v_compra', '$params->v_venta','$params->stock','$params->fo_cate')";


mysqli_query ($conexion,$ins) or die ("no inserto");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "datos_grabados";


header("content-type: application/json");
echo json_encode($response);
?>  