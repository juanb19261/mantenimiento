import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class dashboardService {
  url = 'https://teamvisionw.000webhostapp.com/backend/dashboard/';

  constructor(private http: HttpClient ) { }

  consultar(user:any, clave:any) {
    return this.http.get(`${this.url}login.php?user=${user}&clave=${clave}`);
  }
}