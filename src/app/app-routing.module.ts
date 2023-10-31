import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { FooterComponent } from "src/app/estructura/footer/footer.component"

const routes: Routes = [
  {
    path: "", component: PrincipalComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
      { path: "Login" , component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ]

  },
  { path: "login", component: LoginComponent },
  { path: "footer", component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
