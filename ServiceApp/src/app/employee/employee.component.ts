import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EmpServiceService } from '../employeeService/emp-service.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  title = "Employee Service";
    

  
  private empService = inject(EmpServiceService);
}
