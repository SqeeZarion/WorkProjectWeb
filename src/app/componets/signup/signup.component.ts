import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private fb : FormBuilder, private auth : AuthService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      //дороби запит
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      // Send obj to database
      this.auth.signUp(this.signUpForm.value)
        .subscribe({
          next:(res) =>{
            alert(res.message)
            this.signUpForm.reset();
            this.router.navigate(['login'])
          },
          error:(err)=>{
            alert(err.error.message)
          }
        })
      console.log(this.signUpForm.value, this.signUpForm.valid);
    } else {
      // throw ex
      alert("Form is not valid");
    }
  }
}
