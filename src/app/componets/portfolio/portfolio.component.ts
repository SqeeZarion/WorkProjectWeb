import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2,
              private fb : FormBuilder, private auth : AuthService, private router: Router) {}

  mainForm!: FormGroup;

  changeActiveLink(event: Event, sectionId: string) {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit() {
    this.mainForm = this.fb.group({
      Name: new FormControl('', Validators.required),
      Login: new FormControl('', Validators.required),
      MessageForMe: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.mainForm.valid) {
      // Send obj to database
      this.auth.sendMessage(this.mainForm.value)
        .subscribe({
          next:(res) =>{
            alert(res.message)
            this.mainForm.reset();
          },
          error:(err)=>{
            alert(err.error.message)
          }
        })
      console.log(this.mainForm.value, this.mainForm.valid);
    } else {
      // throw ex
      alert("Form is not valid");
    }
  }
}


