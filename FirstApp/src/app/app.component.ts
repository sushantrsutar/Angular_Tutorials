import { Component } from '@angular/core';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponentComponent,SecondComponentComponent,ThirdComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstApp';
}
