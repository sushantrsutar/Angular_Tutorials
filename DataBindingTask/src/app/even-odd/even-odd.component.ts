import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-even-odd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './even-odd.component.html',
  styleUrl: './even-odd.component.css'
})
export class EvenOddComponent {
  num!:number;
  evenOdd(){
    
     if(this.num%2==0){
      alert("Even Number")
    }else{
      alert("Odd Number")
    }
  }

}
