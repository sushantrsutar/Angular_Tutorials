import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentsComponent } from './departments/departments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,DepartmentsComponent,AboutComponent,ContactComponent,HomeComponent,LoginComponent,RegisterComponent,RouterLinkActive,PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RoutingApp';
}
