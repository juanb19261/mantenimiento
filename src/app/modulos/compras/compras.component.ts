import { Component, OnInit } from '@angular/core';
import { comprasService } from 'src/app/servicios/compras.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  verf = false;
  compras: any;
  categoria_producto: any;
  categoria_usuario : any;
  categoria_proveedor : any;
  idcompras: any;
  compra = {
    // fecha: "",
    cantidad: 0,
    subtotal: 0,
    iva: 0,
    total: 0,
    fo_usuario: 0,
    fo_producto: 0,
    fo_proveedor: 0,
  };

  // variables para validar
  validfecha = true;
  validcantidad = true;
  validsubtotal = true;
  validiva = true;
  validtotal = true;
  validfo_usuario = true;
  validfo_producto = true;
  validfo_proveedor = true;
  beditar = false;

  constructor(private scompras: comprasService) { }

  ngOnInit(): void {
    this.consulta();
    this.limpiar();
    this.consultar_categoria_usuario();
    this.consultar_categoria_producto();
    this.consultar_categoria_provedor();
  }


  //mostrar formulario
  mostrar(dato: any) {
    switch (dato) {
      case 0:
        this.verf = false;
        this.beditar = false;
        this.idcompras = "";
        this.limpiar();
        break;
      case 1:
        this.verf = true;
        break;
    }
  }

  limpiar() {
    // this.compra.fecha = "";
    this.compra.cantidad = 0;
    this.compra.subtotal = 0;
    this.compra.iva = 0;
    this.compra.total = 0;
    this.compra.fo_usuario = 0;
    this.compra.fo_producto = 0;
    this.compra.fo_proveedor = 0;
  }

  // validar formulario
  validar() {
    // if (this.compra.fecha == "") {
    //   this.validfecha = false;
    // } else {
    //   this.validfecha = true;
    // }

    if (this.compra.cantidad == 0) {
      this.validcantidad = false;
    } else {
      this.validcantidad = true;
    }

    if (this.compra.subtotal == 0) {
      this.validsubtotal = false;
    } else {
      this.validsubtotal = true;
    }
    if (this.compra.iva == 0) {
      this.validiva = false;
    } else {
      this.validiva = true;
    }
    if (this.compra.total == 0) {
      this.validtotal = false;
    } else {
      this.validtotal = true;
    }
    if (this.compra.fo_usuario == 0) {
      this.validfo_usuario = false;
    } else {
      this.validfo_usuario = true;
    }
    if (this.compra.fo_producto == 0) {
      this.validfo_producto = false;
    } else {
      this.validfo_producto = true;
    }
    if (this.compra.fo_proveedor == 0) {
      this.validfo_proveedor = false;
    } else {
      this.validfo_proveedor = true;
    }
  }
  insertar() {
    this.validar();
    if (this.validfecha == true && this.validcantidad == true && this.validsubtotal == true && this.validiva == true && this.validtotal == true && this.validfo_usuario == true && this.validfo_producto == true && this.validfo_proveedor) {

      this.scompras.insertar(this.compra).subscribe((datos: any) => {
        if (datos['resultado'] == 'ok') {
          // alerta datos
          this.consulta();
        }
      })
      this.mostrar(0);
      this.limpiar();
    }

  }


  consulta() {
    this.scompras.consultar().subscribe((result: any) => {
      this.compras = result;
      console.log(this.compras);
    })
  }

  //consultar categoria usuario
  consultar_categoria_usuario() {
    this.scompras.consulta_categoria_usuario().subscribe((result: any) => {
      this.categoria_usuario = result;
      console.log(this.compras);
    })
  }
  //consulta categoria producto
  consultar_categoria_producto() {
    this.scompras.consulta_categoria().subscribe((result: any) => {
      this.categoria_producto = result;
      console.log(this.compras);
    })
  }
  //consulta categoria provedor
  consultar_categoria_provedor() {
    this.scompras.consulta_categoria_proveedor().subscribe((result: any) => {
      this.categoria_proveedor = result;
      console.log(this.compras);
    })
  }

  pregunta(id: any) {

    Swal.fire({
      title: 'Esta seguro que quiere eliminar ?',
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
    this.scompras.eliminar(id).subscribe((datos: any) => {
      if (datos['resultado'] == 'ok') {
        this.consulta();
      }
    });

  }


  cargardatos(datos: any, id: Number) {
    console.log(datos);
    // this.compra.fecha = datos.fecha;
    this.compra.cantidad = datos.cantidad;
    this.compra.subtotal = datos.subtotal;
    this.compra.iva = datos.iva;
    this.compra.total = datos.total;
    this.compra.fo_usuario = datos.fo_usuario;
    this.compra.fo_producto = datos.fo_producto;
    this.compra.fo_proveedor = datos.fo_proveedor;
    this.idcompras = id;
    this.mostrar(1);
    this.beditar = true;
  }

  editar() {

    this.validar();

    if (this.validfecha == true && this.validcantidad == true && this.validsubtotal == true && this.validiva == true && this.validtotal == true && this.validfo_usuario == true && this.validfo_producto == true && this.validfo_proveedor) {

      this.scompras.editar(this.compra, this.idcompras).subscribe((datos: any) => {
        if (datos['resultado'] == 'ok') {
          // alerta datos
          this.consulta();
        }
      })
      this.mostrar(0);
    }
  }

}


