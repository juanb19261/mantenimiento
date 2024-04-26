import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'https://teamvisionw.000webhostapp.com/backend/producto/';

  constructor(private http: HttpClient) { }

  consultar() {
    return this.http.get(`${this.url}consultar.php`);
  }

  insertar(articulo: any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(articulo));
  }
  consultar_categoria() {
    return this.http.get(`${this.url}consulta_categoria.php`);
  }
  eliminar(id: number) {
    return this.http.get(this.url + 'eliminar.php?id=' + id);
  }

  editar(datos: any, id: number) {
    return this.http.post(`${this.url}editar.php?id=${id}`, JSON.stringify(datos));
  }

}