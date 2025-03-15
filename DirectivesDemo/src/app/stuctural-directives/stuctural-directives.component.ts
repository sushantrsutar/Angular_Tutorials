import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stuctural-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stuctural-directives.component.html',
  styleUrl: './stuctural-directives.component.css'
})
export class StucturalDirectivesComponent {
  isVisiable:boolean=true;
  colors=["red","green","black","blue","yellow"]
  emplist=[
    {'eid':101,'ename':"sushant",'esalary':36000},
    {'eid':102,'ename':"amol",'esalary':25000},
    {'eid':103,'ename':"Sujata",'esalary':30000}
  ]
  stuList=[
    {'sId':1,'sName':"Priya",'sMarks':80},
    {'sId':2,'sName':"Amit",'sMarks':70},
    {'sId':3,'sName':"Sharyu",'sMarks':40},
    {'sId':4,'sName':"Neha",'sMarks':90}
  ]

  today:number=new Date().getDay();
}
class Empolyee{
  eid?:number;
  ename?:string;
  esalary?:number;
}

class Student{
  sId?:number
  sName?:string;
  sMarks?:number;
}
