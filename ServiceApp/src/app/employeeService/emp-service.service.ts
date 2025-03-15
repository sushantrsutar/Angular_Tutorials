import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor() { }

  
    empData= [
      {name: 'Sushant', salary: 100000},
      {name: 'Amol', salary: 890000},
      {name: 'Suraj', salary: 770000},
      {name: 'Neha', salary: 980000}
    ];
  
}
