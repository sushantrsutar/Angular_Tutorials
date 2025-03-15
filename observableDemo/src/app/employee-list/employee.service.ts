import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private api = 'http://localhost:3000/Employees'; 

  constructor(private http: HttpClient) {}

  // Get all employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.api);
  }

  // Save a new employee
  saveEmployees(e: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.api, e);
  }

  // Update an existing employee
  updateEmployee(e: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.api}/${e.eid}`, e);
  }
  

  // Delete an employee by ID
  deleteEmployee(eid: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${eid}`);
  }
}
