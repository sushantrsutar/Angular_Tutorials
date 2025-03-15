import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { StucturalDirectivesComponent } from './stuctural-directives/stuctural-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AttributeDirectivesComponent,StucturalDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DirectivesDemo';
}
