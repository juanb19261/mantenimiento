<?php
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json = file_get_contents("php://input");

$params = json_decode($json);

$id= $_GET['id'];


require("../conexion.php");

$editar = " UPDATE  producto SET  codigo='$params->codigo', nombre='$params->nombre', v_compra='$params->v_compra', v_venta='$params->v_venta', stock='$params->stock', fo_cate='$params->fo_cate' WHERE id_producto='$id'";

mysqli_query($conexion, $editar) or die("no edito");

Class Result{}

$response = new Result();
$response->resultado = "ok";
$response->mensaje = "datos_modificados";

header("content-type: application/json");
echo json_encode($response);
?>