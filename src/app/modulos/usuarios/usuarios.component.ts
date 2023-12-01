import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class Usuarioscomponent implements OnInit {
  //variables globales

  verf= false;

  constructor(private suser: UsuariosService) { }

  ngOnInit(): void {

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

}



