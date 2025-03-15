import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifecyclehookapp';

  //get data from child component
  dataFromChild!:string;
  getDataFromChild(e:string){
    this.dataFromChild=e;
  }

  //sending msg to child  component
  msg2:string="Hi child i am your Parent"

}
