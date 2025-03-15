import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {

  deptList=[
    {"id":1,"name":"IT"},
    {"id":2,"name":"EE"},
    {"id":3,"name":"CS"},
    {"id":4,"name":"ME"},
    {"id":5,"name":"CE"},
  ]

}
