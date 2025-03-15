import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor() {
    console.log("service constructor")
  }
  sayHello(){
    console.log("hello from service")
  }
 
    
  
}

