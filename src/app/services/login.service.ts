import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/login';
   }

   login(usuario: Usuario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
   }

   setLocalStorage(data: string): void {
    localStorage.setItem('nombreUsuario', data);
   }

   getNombreUsuario(): string{
    return localStorage.getItem('nombreUsuario') ?? '';
   }

  removeLocalStorge(): void{
      localStorage.removeItem('nombreUsuario');
  }
}
