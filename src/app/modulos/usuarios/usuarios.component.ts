import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class Usuarioscomponent implements OnInit {
  //variables globales

<<<<<<< HEAD

  verf = false;
  usuario: any;
  user = {
    Nombre: "",
    usuario: "",
    clave: "",
    tipo: ""
  } ;
=======
  verf= false;
  usuario : any;
>>>>>>> 9789361de464862b78c43a6ff1a408f4bd33c872

  constructor(private suser: UsuariosService) { }

  ngOnInit(): void {
    this.consulta();
<<<<<<< HEAD

=======
>>>>>>> 9789361de464862b78c43a6ff1a408f4bd33c872
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

<<<<<<< HEAD
  consulta() {
    this.suser.consultar().subscribe((result: any) => {
      this.usuario = result;
      //console.log(this.usuario);
    })
  }

  ingresar() {
    this.suser.insertar(this.user).subscribe((datos: any) => { 
      if (datos['resultado']=='ok') {
        this.consulta();
      }
    
    })
    this.mostrar(0);
  }

=======
  consulta(){
    this.suser.consultar().subscribe((result:any)=> {
      this.usuario = result;
      console.log(this.usuario);
    })
  }

>>>>>>> 9789361de464862b78c43a6ff1a408f4bd33c872
}
