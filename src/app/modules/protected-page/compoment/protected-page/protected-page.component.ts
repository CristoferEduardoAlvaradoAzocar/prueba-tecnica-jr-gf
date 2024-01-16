import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-protected-page',
  templateUrl: './protected-page.component.html',
  styleUrls: ['./protected-page.component.css']
})


export class ProtectedPageComponent {


  private password:'' | undefined
Usuario: any;
Nombre: any;
Email: any;
Genero: any;
lastName: any;
  
  

  constructor (private authservice: AuthService){
    
    this.Usuario = localStorage.getItem('Usuario');
    this.Nombre = localStorage.getItem('Nombre');
    this.Email = localStorage.getItem('Email');
    this.Genero = localStorage.getItem('Genero');
    this.lastName = localStorage.getItem('lastName');
  }


}
