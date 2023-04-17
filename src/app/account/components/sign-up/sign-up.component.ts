import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServiceService } from '../../service/account-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  Form!: FormGroup
  PasswordNotMatch: boolean = false
  ExistEmail: boolean = false
  GoHome: boolean = false
  GenderType!: string;
  gender: string[] = ['Male', 'Female'];

  constructor(private service: AccountServiceService, private fb: FormBuilder, private router: Router) {
    this.Form = fb.group({
      Username: ['', [Validators.required, this.noSpace]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ['', Validators.required],
      Position: ['', Validators.required]
    })
  }


  get Username() {
    return this.Form.get("Username")
  }

  get Email() {
    return this.Form.get("Email")
  }

  get Password() {
    return this.Form.get("Password")
  }

  get ConfirmPassword() {
    return this.Form.get("ConfirmPassword")
  }

  get Position() {
    return this.Form.get("Position")
  }

  // on Create button send data to api or DB
  SendUser() {
    if (this.service.ExistEmails(this.Email?.value)) {
      this.ExistEmail = true
    } else {
      this.ExistEmail = false
      this.service.PostUsers(this.Form.value).subscribe(data => {
        this.GoHome = true
        setTimeout(() => {
          this.router.navigateByUrl("/page")
        }, 1500);
      })
    }
  }

  // no space allowed between letters
  noSpace(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpace: true }
    }
    return null;
  }
}
