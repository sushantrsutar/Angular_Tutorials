import { style } from '@angular/animations';
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './course-list.component.html',
  

})
export class CourseListComponent {
  courseList:Course[] = [];
  newCourseName:string = ''; 

 
  addCourse() {
    if (this.newCourseName !== '') {
      const course = new Course();
      course.courseName = this.newCourseName; 
      this.courseList.push(course); 
      this.newCourseName = ''; 
    }
  }
  clearList(){
     this.courseList =[];
  }
}

class Course {
  courseName?: string;
  
}
