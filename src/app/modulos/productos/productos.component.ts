import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  //variables globa HEAD

  verf = false;
  productos: any;
  idprod: any;
  product= {
    codigo: "",
    nombre: "",
    ncategoria: "",
    v_compra: 0,
    v_venta: 0,
    stock: 0,
  };
  // variables para validar
  validcodigo = true
  validnombre = true
  validcompra = true
  validventa= true
  validtipo = true
  beditar=false;

  constructor(private sproducto : ProductoService) { }

  ngOnInit(): void {
    this.consulta();
    // this.limpiar();
  }


  //mostrar formulario
  mostrar(dato: any) {
    switch (dato) {
      case 0:
        this.verf = false;
        this.beditar = false;
        this.idprod = "";
        // this.limpiar();
        break;
      case 1:
        this.verf = true;
        break;
    }
  }



  consulta() {
    this.sproducto.consultar().subscribe((result: any) => {
      this.productos = result;
      console.log(this.productos);
    })
  }
}
