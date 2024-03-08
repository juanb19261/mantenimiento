<?php 
header("Access-Control-Allow-origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require("../conexion.php");

$con = "SELECT c.id_ventas, c.fecha, c.cantidad, c.subtotal, c.iva, c.total, c.fo_usuarios, c.fo_producto, c.fo_clientes, u.Nombre as nfo_usuarios, p.nombre as nfo_producto, po.nombre as nfo_clientes from ventas c INNER JOIN usuarios u ON u.id_usuario = c.fo_usuarios INNER JOIN producto p ON c.fo_producto = p.id_producto INNER JOIN clientes po ON c.fo_clientes = po.id_cliente";
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