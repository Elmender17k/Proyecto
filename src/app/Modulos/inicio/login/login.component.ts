import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],

})
export class LoginComponent {
  constructor(private router: Router) {}

  iniciarSesion(datos: any): void {
    
    const credencialesValidas = true; 

    if (credencialesValidas) {
     
      this.router.navigateByUrl('/registro');
    } else {

    }
  }
 

}
