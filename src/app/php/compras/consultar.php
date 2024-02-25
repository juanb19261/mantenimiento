<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("../conexion.php");

$con = "SELECT c.id_compras, c.fecha, c.cantidad, c.subtotal, c.iva, c.total, u.Nombre, p.nombre, po.nombre from compras c INNER JOIN usuarios u ON u.id_usuario = c.fo_usuario INNER JOIN producto p ON c.fo_producto = p.id_producto INNER JOIN proveedor po ON c.fo_producto = po.id_proveedor";
$res= mysqli_query($conexion,$con) or die("no_consulto_usuario");



$vec = [];
while ($reg=mysqli_fetch_array($res))
{
    $vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header("content-type: application/json");
?>