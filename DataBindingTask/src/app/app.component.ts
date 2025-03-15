import { Component } from '@angular/core';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { CourseListComponent } from './course-list/course-list.component';
import { NameValidationComponent } from './name-validation/name-validation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EvenOddComponent,CourseListComponent,NameValidationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataBindingTask';
}
