import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class Usuarioscomponent implements OnInit {
  //variables globa HEAD

  verf = false;
  usuario: any;
  iduser: any;
  user = {
    Nombre: "",
    usuario: "",
    clave: "",
    tipo: ""
  };
  // variables para validar
  validNombre = true
  validusuario = true
  validclave = true
  validtipo = true
  beditar=false;

  constructor(private suser: UsuariosService) { }

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
        this.iduser = "";
        this.limpiar();
        break;
      case 1:
        this.verf = true;
        break;
    }
  }
  // limpiar campos
  limpiar() {
    this.user.Nombre = "";
    this.user.usuario = "";
    this.user.clave = "";
    this.user.tipo = "";
  }

  // validar formulario
  validar() {
    if (this.user.Nombre == "") {
      this.validNombre = false;
    } else {
      this.validNombre = true;
    }


    if (this.user.usuario == "") {
      this.validusuario = false;
    } else {
      this.validusuario = true;
    }


    if (this.user.clave == "") {
      this.validclave = false;
    } else {
      this.validclave = true;
    }

    if (this.user.tipo == "") {
      this.validtipo = false;
    } else {
      this.validtipo = true;
    }

  }


  consulta() {
    this.suser.consultar().subscribe((result: any) => {
      this.usuario = result;
      //console.log(this.usuario);
    })
  }

  ingresar() {
    this.validar();
    if (this.validNombre == true && this.validusuario == true && this.validclave == true && this.validtipo == true) {

      this.suser.insertar(this.user).subscribe((datos: any) => {
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
    this.suser.eliminar(id).subscribe((datos: any) => {
      if (datos['resultado'] == 'ok'){
        this.consulta();
      }
    });

  }

  cargardatos(datos:any, id:number){
    this.user.Nombre = datos.Nombre;
    this.user.usuario = datos.usuario;
    this.user.clave = datos.clave;
    this.user.tipo = datos.tipo;
    this.iduser = id;
    this.mostrar(1);
    this.beditar = true;
  }

  editar(){

    this.validar();
    
    if (this.validNombre == true && this.validusuario == true && this.validclave == true && this.validtipo == true) {

      this.suser.editar(this.user, this.iduser).subscribe((datos: any) => {
        if (datos['resultado'] == 'ok') {
          // alerta datos
          this.consulta();
        }
      })
      this.mostrar(0);  
    }
  }

}
