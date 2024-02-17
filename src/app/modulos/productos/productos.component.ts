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
  categoria: any;
  idprod: any;
  product = {
    codigo: "",
    nombre: "",
    fo_cate: 0,
    v_compra: 0,
    v_venta: 0,
    stock: 0,
  };

  // variables para validar
  validcodigo = true;
  validnombre = true;
  validcompra = true;
  validventa = true;
  validstock = true;
  validfo_cate = true;
  beditar = false;

  constructor(private sproducto: ProductoService) { }

  ngOnInit(): void {
    this.limpiar();
    this.consultar();
    this.consultar_categoria();
  }


  //mostrar formulario
  mostrar(dato: any) {
    switch (dato) {
      case 0:
        this.verf = false;
        this.beditar = false;
        this.idprod = "";
        this.limpiar();
        break;
      case 1:
        this.verf = true;
        break;
    }
  }

  limpiar() {
    this.product.codigo = "";
    this.product.nombre = "";
    this.product.fo_cate = 0;
    this.product.v_compra = 0;
    this.product.v_venta = 0;
    this.product.stock = 0;
  }

  // validar formulario
  validar() {
    if (this.product.codigo == "") {
      this.validcodigo = false;
    } else {
      this.validcodigo = true;
    }

    if (this.product.nombre == "") {
      this.validnombre = false;
    } else {
      this.validnombre = true;
    }

    if (this.product.codigo == "") {
      this.validcodigo = false;
    } else {
      this.validcodigo = true;
    }
    if (this.product.v_compra == 0) {
      this.validcompra = false;
    } else {
      this.validcompra = true;
    }
    if (this.product.fo_cate == 0) {
      this.validfo_cate = false;
    } else {
      this.validfo_cate = true;
    }
    if (this.product.v_venta == 0) {
      this.validventa = false;
    } else {
      this.validventa = true;
    }
    if (this.product.stock == 0) {
      this.validstock = false;
    } else {
      this.validstock = true;
    }
  }
  insertar() {
    this.validar();
    if (this.validcodigo == true && this.validnombre == true && this.validfo_cate == true && this.validcompra == true && this.validventa == true && this.validstock == true) {

      this.sproducto.insertar(this.product).subscribe((datos: any) => {
        if (datos['resultado'] == 'ok') {
          // alerta datos
          this.consultar();
        }
      })
      this.mostrar(0);
      this.limpiar();
    }

  }
  consultar() {
    this.sproducto.consultar().subscribe((result: any) => {
      this.productos = result;
      console.log(this.sproducto);
    })
  }


  consultar_categoria() {
    this.sproducto.consultar_categoria().subscribe((result: any) => {
      this.categoria = result;
      console.log(this.productos);
    })
  }
  pregunta(id: any, Nombre: any) {

    Swal.fire({
      title: 'Esta seguro eliminar usuario ' + Nombre + '?',
      text: "El proceso no podra ser revertido!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrarusuario(id);
        Swal.fire({
          title: "Eliminado!",
          text: "El usuario ha sido eliminado.",
          icon: "success"
        });
      }
    });
  }


  borrarusuario(id: any) {
    this.productos.eliminar(id).subscribe((datos: any) => {
      if (datos['resultado'] == 'ok'){
        this.consultar();
      }
    });

  }


  cargardatos(datos:any, id:number){
    this.product.codigo = datos.codigo;
    this.product.nombre = datos.nombre;
    this.product.v_compra = datos.v_compra;
    this.product.v_venta = datos.v_venta;
    this.product.stock= datos.stock;
    this.product.fo_cate= datos.fo_cate;
    this.mostrar(1);
    this.beditar = true;
  }

  editar(){

    this.validar();
    
    if (this.validcodigo == true && this.validnombre == true && this.validcompra == true && this.validventa == true && this.validstock == true && this.validfo_cate ) {

      this.productos.editar(this.productos, this.idprod).subscribe((datos: any) => {
        if (datos['resultado'] == 'ok') {
          // alerta datos
          this.consultar();
        }
      })
      this.mostrar(0);  
    }
  }

}

