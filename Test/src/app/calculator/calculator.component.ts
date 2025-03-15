import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1!:number;
  num2!:number;
  result!:number;

  calculate(opration:string):void{
    switch(opration){
      case 'add':
        this.result=this.num1+this.num2;
        break;
      case 'sub':
        this.result=this.num1-this.num2;
        break;
      case 'mult':
        this.result=this.num1*this.num2;
        break;
        case 'div':
        this.result=this.num1/this.num2;
        break;  
    }
  }


}
