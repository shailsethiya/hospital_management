import { RegisterService } from './../../../services/common/register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
  ) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  register() {
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid) {
      let obj = this.registrationForm.value;
      obj['isVerified'] = 'N';
      obj['status'] = 'ACTIVE';
      this.registerService.register(obj).subscribe(result => {
        if (result) {
          console.log(result);
          alert('Register Successsfully');
          this.registrationForm.reset();
        }
      }, error => {
        alert(error.error);
      }
      )
    }
    else {
      <any>Object.values(this.registrationForm.controls).forEach(controls =>
        controls.markAllAsTouched()
      )
    }

  }

}
