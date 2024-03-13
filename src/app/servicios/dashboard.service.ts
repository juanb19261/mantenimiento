import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class dashboardService {
  url = 'http://localhost/mantenimiento/src/app/php/dashboard/';

  constructor(private http: HttpClient ) { }

  consultar(user:any, clave:any) {
    return this.http.get(`${this.url}login.php?user=${user}&clave=${clave}`);
  }
}