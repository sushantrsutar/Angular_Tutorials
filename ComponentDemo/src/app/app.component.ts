import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompoOneComponent } from './compo-one/compo-one.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CompoOneComponent,TwoWayBindingComponent,EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ComponentDemo';
}
