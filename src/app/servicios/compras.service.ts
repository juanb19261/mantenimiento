import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class comprasService {

  url = 'https://teamvisionw.000webhostapp.com/backend/compras/';
  url2 = 'https://teamvisionw.000webhostapp.com/backend/usuarios/';
  url3 = 'https://teamvisionw.000webhostapp.com/backend/proveedor/';
  url4 = 'https://teamvisionw.000webhostapp.com/backend/producto/'


  constructor(private http: HttpClient) { }

  consultar() {
    return this.http.get(`${this.url}consultar.php`);
  }

  insertar(articulo: any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(articulo));
  }
  consulta_categoria() {
    return this.http.get(`${this.url4}consultar.php`);
  }

  consulta_categoria_usuario() {
    return this.http.get(`${this.url2}consulta.php`);
  }
  consulta_categoria_proveedor() {
    return this.http.get(`${this.url3}consulta.php`);
  }
  eliminar(id: number) {
    return this.http.get(this.url + 'eliminar.php?id=' + id);
  }

  editar(datos: any, id: number) {
    return this.http.post(`${this.url}editar.php?id=${id}`, JSON.stringify(datos));
  }

}