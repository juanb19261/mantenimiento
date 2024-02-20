import { Component, OnInit } from '@angular/core';
import { clientesService } from 'src/app/servicios/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  
  verf = false;
  clientes: any;
  idcliente: any;
  client = {
    codigo: "",
    nombre: "",
    direccion: "",
    email: "",
    celular: ""
  };
  
  // variables para validar
  validcodigo = true
  validnombre = true
  validdireccion = true
  validemail = true
  validcelular = true
  beditar = false;

  constructor(private sclientes: clientesService) { }

  ngOnInit(): void {
    this.consulta();
    this.limpiar();
  }


  //mostrar formulario
  mostrar(dato: any) {
    switch (dato) {
      case 0:
        this.verf = false;
        this.beditar = false;
        this.idcliente = "";
        this.limpiar();
        break;
      case 1:
        this.verf = true;
        break;
    }
  }
  // limpiar campos
  limpiar() {
    this.client.codigo = "";
    this.client.nombre = "";
    this.client.direccion = "";
    this.client.email = "";
    this.client.celular = "";
  }

  // validar formulario
  validar() {
    if (this.client.codigo == "") {
      this.validcodigo = false;
    } else {
      this.validcodigo = true;
    }


    if (this.client.nombre == "") {
      this.validnombre = false;
    } else {
      this.validnombre = true;
    }


    if (this.client.direccion == "") {
      this.validdireccion = false;
    } else {
      this.validdireccion = true;
    }

    if (this.client.email == "") {
      this.validemail = false;
    } else {
      this.validemail = true;
    }

    if (this.client.celular == "") {
      this.validcelular = false;
    } else {
      this.validcelular = true;
    }

  }


  consulta() {
    this.sclientes.consultar().subscribe((result: any) => {
      this.clientes = result;
      console.log(this.clientes);
    })
  }

  ingresar() {
    this.validar();
    if (this.validcodigo == true && this.validnombre == true && this.validdireccion == true && this.validemail == true && this.validcelular) {

      this.sclientes.insertar(this.client).subscribe((datos: any) => {
        if (datos['resultado'] == 'ok') {
          // alerta datos
          this.consulta();
        }
      })
      this.mostrar(0);
      this.limpiar();
    }

  }
  pregunta(id: any, Nombre: any) {

    Swal.fire({
      title: 'Esta seguro eliminar ' + Nombre + '?',
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
    this.sclientes.eliminar(id).subscribe((datos: any) => {
      if (datos['resultado'] == 'ok') {
        this.consulta();
      }
    });

  }

  cargardatos(datos: any, id: number) {
    this.client.codigo = datos.codigo;
    this.client.nombre = datos.nombre;
    this.client.direccion = datos.direccion;
    this.client.email = datos.email;
    this.client.celular = datos.Celular;
    this.idcliente = id;
    this.mostrar(1);
    this.beditar = true;
  }

  editar() {

    this.validar();

    if (this.validcodigo == true && this.validnombre == true && this.validdireccion == true && this.validemail == true && this.validcelular) {

      this.sclientes.editar(this.client, this.idcliente).subscribe((datos: any) => {
        if (datos['resultado'] == 'ok') {
          // alerta datos
          this.consulta();
        }
      })
      this.mostrar(0);
    }
  }

}
