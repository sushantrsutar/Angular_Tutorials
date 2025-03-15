import { CommonModule } from '@angular/common';
import { Component, inject, TrackByFunction } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.dto';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  myforms!: FormGroup;
  btn: string = 'save';
  emplist!: Employee[];

  es: EmployeeService = inject(EmployeeService);
  trackById: TrackByFunction<Employee> = (index, employee) => employee.eid;

  constructor(private fb: FormBuilder) {
    this.myforms = this.fb.group({
      eid: ['', Validators.required],
      name: ['', Validators.required],
      salary: ['', Validators.required]
    });
    this.showEmployeeList();
  }

  
  get eid() {
    return this.myforms.get('eid')!;
  }
  get name() {
    return this.myforms.get('name')!;
  }
  get salary() {
    return this.myforms.get('salary')!;
  }

  // Clear form fields
  clearFields() {
    this.myforms.reset();
    this.btn = 'save';
  }

  // Add or update employee
  addEmployee() {
    const eobj = this.myforms.value;
    if (this.btn === 'save') {
      this.es.saveEmployees(eobj).subscribe(() => {
        alert('Employee added');
        this.clearFields();
        this.showEmployeeList();
      });
    } else if (this.btn === 'update') {
      this.es.updateEmployee(eobj).subscribe(() => {
        alert('Employee updated');
        this.clearFields();
        this.showEmployeeList();
      });
    }
  }

  
  showEmployeeList() {
    this.es.getEmployees().subscribe((data) => {
      this.emplist = data;
    });
  }

  // Delete employee
  removeEmployee(id: number) {
    this.es.deleteEmployee(id).subscribe(() => {
      alert('Employee deleted');
      this.showEmployeeList(); 
    }, (error) => {
      console.error('Error occurred:', error); 
    });
  }

  
  editEmployee(e: Employee) {
    this.myforms.patchValue({
      eid: e.eid,
      name: e.name,
      salary: e.salary
    });
    this.btn = 'update';
  }
}
