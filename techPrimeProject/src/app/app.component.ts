import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { InsertProjectComponent } from './insert-project/insert-project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,InsertProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'techPrimeProject';
}
