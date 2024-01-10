import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class Usuarioscomponent implements OnInit {
  //variables globa HEAD

  verf = false;
  usuario: any;
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


}
