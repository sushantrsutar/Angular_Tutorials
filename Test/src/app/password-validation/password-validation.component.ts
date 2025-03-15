import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-validation',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './password-validation.component.html',
  styleUrl: './password-validation.component.css'
})
export class PasswordValidationComponent {
  passwordForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.passwordForm=this.fb.group({
    password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]]
    })
  }
  onSubmit(){
    if(this.passwordForm.valid){
      alert("valide password")
    }
  }

}
