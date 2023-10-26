import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
   myAppUrl: string;
   myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl= '/api/Usuario';
   }
   // http://localhost:40675/api/Usuario -- POST
  saveUser(usuario: Usuario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }

  changePassword(changePassword: any): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + '/CambiarPassword', changePassword);// el 2do parámetro: es el body que debe tener las 2 propiedades que se están trabajandom para este caso 
  }
}

//http://localhost:4200/dashboard/cambiarPassword



 /* private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };*/



//this.myAppUrl + this.myApiUrl + 