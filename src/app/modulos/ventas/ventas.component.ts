import { Component, OnInit } from '@angular/core';
import { ventasService } from 'src/app/servicios/ventas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {


verf = false;
  ventas: any;
  categoria_usuarios : any;
  categoria_producto: any;
  categoria_clientes : any;
  idventas: any;
  venta = {
    // fecha: "",
    cantidad: 0,
    subtotal: 0,
    iva: 0,
    total: 0,
    fo_usuarios: 0,
    fo_producto: 0,
    fo_clientes: 0,
  };

  // variables para validar
  validfecha = true;
  validcantidad = true;
  validsubtotal = true;
  validiva = true;
  validtotal = true;
  validfo_usuarios = true;
  validfo_producto = true;
  validfo_clientes = true;
  beditar = false;

  constructor( private sventas: ventasService) { }

  ngOnInit(): void {
    this.consulta();
    this.limpiar();
    this.consultar_categoria_usuarios();
    this.consultar_categoria_producto();
    this.consultar_categoria_clientes();
  }


  //mostrar formulario
  mostrar(dato: any) {
    switch (dato) {
      case 0:
        this.verf = false;
        this.beditar = false;
        this.idventas = "";
        this.limpiar();
        break;
      case 1:
        this.verf = true;
        break;
    }
  }

  limpiar() {
    // this.compra.fecha = "";
    this.venta.cantidad = 0;
    this.venta.subtotal = 0;
    this.venta.iva = 0;
    this.venta.total = 0;
    this.venta.fo_usuarios = 0;
    this.venta.fo_producto = 0;
    this.venta.fo_clientes = 0;
  }

  // validar formulario
  validar() {
    // if (this.compra.fecha == "") {
    //   this.validfecha = false;
    // } else {
    //   this.validfecha = true;
    // }

    if (this.venta.cantidad == 0) {
      this.validcantidad = false;
    } else {
      this.validcantidad = true;
    }

    if (this.venta.subtotal == 0) {
      this.validsubtotal = false;
    } else {
      this.validsubtotal = true;
    }
    if (this.venta.iva == 0) {
      this.validiva = false;
    } else {
      this.validiva = true;
    }
    if (this.venta.total == 0) {
      this.validtotal = false;
    } else {
      this.validtotal = true;
    }
    if (this.venta.fo_usuarios == 0) {
      this.validfo_usuarios = false;
    } else {
      this.validfo_usuarios = true;
    }
    if (this.venta.fo_producto == 0) {
      this.validfo_producto = false;
    } else {
      this.validfo_producto = true;
    }
    if (this.venta.fo_clientes == 0) {
      this.validfo_clientes = false;
    } else {
      this.validfo_clientes = true;
    }
  }
  insertar() {
    this.validar();
    if (this.validfecha == true && this.validcantidad == true && this.validsubtotal == true && this.validiva == true && this.validtotal == true && this.validfo_usuarios == true && this.validfo_producto == true && this.validfo_clientes) {

      this.sventas.insertar(this.venta).subscribe((datos: any) => {
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
    this.sventas.consultar().subscribe((result: any) => {
      this.ventas = result;
      console.log(this.ventas);
    })
  }

  //consultar categoria usuario
  consultar_categoria_usuarios() {
    this.sventas.consulta_categoria_usuarios().subscribe((result: any) => {
      this.categoria_usuarios = result;
    })
  }
  //consulta categoria producto
  consultar_categoria_producto() {
    this.sventas.consulta_categoria().subscribe((result: any) => {
      this.categoria_producto = result;
    })
  }
  //consulta categoria provedor
  consultar_categoria_clientes() {
    this.sventas.consulta_categoria_clientes().subscribe((result: any) => {
      this.categoria_clientes = result;
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
    this.sventas.eliminar(id).subscribe((datos: any) => {
      if (datos['resultado'] == 'ok') {
        this.consulta();
      }
    });

  }


  cargardatos(datos: any, id: Number) {
    console.log(datos);
    // this.compra.fecha = datos.fecha;
    this.venta.cantidad = datos.cantidad;
    this.venta.subtotal = datos.subtotal;
    this.venta.iva = datos.iva;
    this.venta.total = datos.total;
    this.venta.fo_usuarios = datos.fo_usuarios;
    this.venta.fo_producto = datos.fo_producto;
    this.venta.fo_clientes = datos.fo_clientes;
    this.idventas = id;
    this.mostrar(1);
    this.beditar = true;
  }

  editar() {

    this.validar();

    if (this.validfecha == true && this.validcantidad == true && this.validsubtotal == true && this.validiva == true && this.validtotal == true && this.validfo_usuarios == true && this.validfo_producto == true && this.validfo_clientes) {

      this.sventas.editar(this.venta, this.idventas).subscribe((datos: any) => {
        if (datos['resultado'] == 'ok') {
          // alerta datos
          this.consulta();
        }
      })
      this.mostrar(0);
    }
  }

}
