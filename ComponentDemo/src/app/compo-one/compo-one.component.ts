import { Component } from '@angular/core';

@Component({
  selector: 'app-compo-one',
  standalone: true,
  imports: [],
  templateUrl: './compo-one.component.html',
  styleUrls: ['./compo-one.component.css'] 
})
export class CompoOneComponent {
  name: string = "Sushant";

  // Property binding
  isdiseable: boolean = false; 
  src: string = "ironMan.jpg"; 

  //atribute binding
  parastyle='red';
  divstyle={
    'color':'blue',
    'background-color':'red',
    'border':'solid 2px red',
    'height':'300px'
  
  }
  isboolean:boolean=true;
  //callspan demo
  callspan: number = 3;

}
