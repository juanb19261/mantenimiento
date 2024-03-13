import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { dashboardService} from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class dashboardComponent implements OnInit {
  email: any;
  clave: any;
  usuario: any;
  error = false;
  user = {
    nombre: "",
    usuario: "",
    clave: "",
    tipo: ""
  }

  constructor(private sdashboard: dashboardService, private router: Router) { }

  ngOnInit(): void {

  }

  consulta() {
    this.sdashboard.consultar(this.email, this.clave).subscribe((result: any) => {
      this.usuario = result;
      console.log(this.usuario);

      if (this.usuario[0].validar == "valida") {
        console.log("entero");
        sessionStorage.setItem('id', this.usuario[0].id_usuario);
        sessionStorage.setItem('Nombre', this.usuario[0].Nombre);
        sessionStorage.setItem('tipo', this.usuario[0].tipo);
        this.router.navigate(['dashboard']);
      }
      else {
        console.log("no entro");
        this.error = true;
      }


    })

  }
}


