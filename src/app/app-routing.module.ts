import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { dashboardComponent} from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { FooterComponent } from "src/app/estructura/footer/footer.component"
import { Usuarioscomponent } from './modulos/usuarios/usuarios.component';
import { validaruserGuard } from './guards/validaruser.guard';
import { ProductosComponent } from './modulos/productos/productos.component';
import { ClientesComponent } from './modulos/clientes/clientes.component';
import { ComprasComponent } from './modulos/compras/compras.component';
import { VentasComponent } from './modulos/ventas/ventas.component';

const routes: Routes = [
  {
    path: "", component: PrincipalComponent,
    canActivate: [validaruserGuard],
    children: [
      { path: "dashboard", component: dashboardComponent},
      { path: "usuarios", component: Usuarioscomponent},
      { path: "productos", component: ProductosComponent},
      { path: "clientes", component: ClientesComponent},
      { path: "compras", component: ComprasComponent},
      { path: "ventas", component: VentasComponent},
      { path: "dashboard", redirectTo: "login", pathMatch: "full" },
      
    ],
  },
  { path: "login", component: LoginComponent },
  { path: "footer", component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
