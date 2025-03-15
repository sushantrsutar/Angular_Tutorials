import { Component, inject } from '@angular/core';
import { FirstServiceService } from '../service/first-service.service';

@Component({
  selector: 'app-myservice',
  standalone: true,
  imports: [],
  templateUrl: './myservice.component.html',
  styleUrl: './myservice.component.css'
})
export class MyserviceComponent {
 // case 1
//  constructor(private ms:FirstServiceService){
  
//  }
 //case 2
 private ms1=inject(FirstServiceService)

 seviceClick(){
  this.ms1.sayHello()
 }


}

