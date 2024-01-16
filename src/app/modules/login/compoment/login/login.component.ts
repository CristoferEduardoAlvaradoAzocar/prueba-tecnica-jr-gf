import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
credenciales ={

  username:'',
  password:'',

}

  constructor(private authService: AuthService, private router:Router) { }

  login() {
    this.authService.login(this.credenciales).subscribe(
      response => {
        const token = response.token;
        this.authService.setToken(token);
        console.log(response.lastName)
        this.router.navigate(['/home']);
        localStorage.setItem('Usuario' , response.username);
        localStorage.setItem('Nombre' , response.firstName);
        localStorage.setItem('Email' , response.email);
        localStorage.setItem('Genero' , response.gender);
        localStorage.setItem('lastName' , response.lastName);
        // Maneja la redirección o cualquier acción después del inicio de sesión exitoso.
      },
      error => {
        console.error('Error en la solicitud de inicio de sesión:', error);
  
        // Muestra un mensaje de error específico al usuario
        if (error.error && error.error.message) {
          alert(error.error.message);
        } else {
          alert('Error en el inicio de sesión. Por favor, verifica tus credenciales.');
        }
      }
    );
  }
  
  
}
