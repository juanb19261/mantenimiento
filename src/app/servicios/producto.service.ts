import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost/mantenimiento/src/app/php/producto/';

  constructor(private http: HttpClient) { }

  consultar() {
    return this.http.get (`${this.url}consultar.php`);
  }

   insertar(articulo: any) {
    return this.http.post(`${this.url}insert.php`, JSON.stringify(articulo));
   }
   consultar_categoria() {
    return this.http.get(`${this.url}consultar_categoria.php`);
  }
  // eliminar(id: number) {
  //   return this.http.get('${this.url}eliminar.php?id=${id}');
  // }

  // editar(datos: any) {
  //   return this.http.post('${this.url}editar.php', JSON.stringify(datos));
  // }

}