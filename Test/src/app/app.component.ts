import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { PasswordValidationComponent } from './password-validation/password-validation.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { AboutComponent } from './about/about.component';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink, RouterOutlet, CalculatorComponent, PasswordValidationComponent, HomeComponent, CareerComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test';
}
