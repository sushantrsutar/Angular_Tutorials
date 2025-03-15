import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-validation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './name-validation.component.html',
  styleUrls: ['./name-validation.component.css'],
})
export class NameValidationComponent {
  name: string = '';
  errorMessage: string = '';
  isError: boolean = true; 

  validateName() {
    this.name = this.name.trim();

    if (this.name === '') {
      this.errorMessage = 'Name is required';
      this.isError = true; 
    } else {
      this.errorMessage = 'Validated Name';
      this.isError = false; 
    }
  }
}
