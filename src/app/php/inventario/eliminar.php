<?php 
header(`Access-Control-Allow-origin: *`);
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


require ("../conexion.php");
 
$del = "DELETE FROM inventario WHERE id_inventario=".$_GET["id" ];

mysqli_query($conexion,$del) or die ("no elimino");

Class Result{}

$response = new Result ();
$response -> resultado = "ok";
$response -> mensaje = "usuario_borrado";


header("Content-Type: application/json");
echo json_encode($response);
?>