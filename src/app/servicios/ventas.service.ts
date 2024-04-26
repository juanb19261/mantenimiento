import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ventasService {

  

  url = 'https://teamvisionw.000webhostapp.com/backend/ventas/';
  url2 = 'https://teamvisionw.000webhostapp.com/backend/usuarios/';
  url3 = 'https://teamvisionw.000webhostapp.com/backend/producto/';
  url4 = 'https://teamvisionw.000webhostapp.com/backend/clientes/'

  constructor(private http: HttpClient) { }

  consultar() {
    return this.http.get(`${this.url}consulta.php`);
  }

  insertar(articulo: any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(articulo));
  }
  consulta_categoria() {
    return this.http.get(`${this.url3}consultar.php`);
  }

  consulta_categoria_usuarios() {
    return this.http.get(`${this.url2}consulta.php`);
  }
  consulta_categoria_clientes() {
    return this.http.get(`${this.url4}consulta.php`);
  }
  eliminar(id: number) {
    return this.http.get(this.url + 'eliminar.php?id=' + id);
  }

  editar(datos: any, id: number) {
    return this.http.post(`${this.url}editar.php?id=${id}`, JSON.stringify(datos));
  }

}