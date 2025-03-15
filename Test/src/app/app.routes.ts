import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PasswordValidationComponent } from './password-validation/password-validation.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"calculator",component:CalculatorComponent},
    {path:"passwordValidation",component:PasswordValidationComponent}
    
];
