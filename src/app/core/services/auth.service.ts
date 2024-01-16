import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login'; // Reemplaza con la URL de tu API
  private apiUrluser = 'https://dummyjson.com/users';
  private token: string | null = null;

  constructor(private http: HttpClient) {
    // Recupera el token almacenado (si existe) al inicializar el servicio
    this.token = localStorage.getItem('access_token');
  }

  login(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, credenciales) ;
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('access_token', token);
  }

  removeToken(): void {
    this.token = null;
    localStorage.removeItem('access_token');
  }

  getHttpOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token ? `Bearer ${this.token}` : ''
      })
    };
  }
}
  // Puedes agregar más métodos según tus necesidades
