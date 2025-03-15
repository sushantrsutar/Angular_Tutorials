import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fname: ['', [Validators.required,Validators.minLength(3)]],
      lname: ['', [Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      address:['',[Validators.required]],
      age:['',[Validators.required]]
    });
  }
  get age(){
    return this.myForm.get('age')
  }
  get address(){
    return this.myForm.get('address')
  }
  get fname() {
    return this.myForm.get('fname');
  }

  get lname() {
    return this.myForm.get('lname');
  }
  get email(){
    return this.myForm.get('email')
  }
  get password(){
    return this.myForm.get('password')
  }

  onSubmit() {
    if (this.myForm.valid) {
     //alert(this.myForm.value.fname + " " + this.myForm.value.lname);
     alert("Form submitted")
    } else {
      alert("Form not submitted");
    }
  }
}
