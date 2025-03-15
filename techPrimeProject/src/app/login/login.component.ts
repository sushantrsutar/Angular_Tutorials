import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor() {}

  onLogin() {
    
    console.log('Login button clicked!');
  }

  onForgotPassword() {
    console.log('Forgot Password button clicked!');
  }
}
