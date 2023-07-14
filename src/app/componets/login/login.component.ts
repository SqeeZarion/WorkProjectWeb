import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb : FormBuilder, private auth : AuthService, private router: Router) { }

  ngOnInit():void {
    this.loginForm = this.fb.group({
      password: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required)
    })
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Send obj to database
      this.auth.login(this.loginForm.value)
        .subscribe({
          next: (res) => {
            localStorage.setItem('access_token', res.acess_token);

            console.log(res.acess_token);
            const payload = LoginComponent.getDecodedAccessToken(res.acess_token);
            console.log(payload["UserTypeRole"].toString().replaceAll(',', '')); // TODO: Render admin page if role is equal to "admin"

            if (payload["UserTypeRole"].toString().replaceAll(',', '') === "Admin") {
              this.loginForm.reset();
              this.router.navigate(['main-admin']);
            } else {
              this.loginForm.reset();
              this.router.navigate(['main']);
            }
          },
          error: (err) => {
            alert(err.error.message);
          }
        });
    } else {
      // throw ex
      alert("Form is not valid");
    }
  }

  private static getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }


  //метод validateAllFormFileds перебирає всі контроли formGroup,
  // перевіряє, чи є вони екземплярами FormControl, і помічає їх як "брудні" (dirty).
}
