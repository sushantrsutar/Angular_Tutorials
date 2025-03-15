import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyserviceComponent } from './myservice/myservice.component';
import { EmployeeComponent } from './employee/employee.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyserviceComponent,EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ServiceApp';
}
