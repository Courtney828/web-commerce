import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public contactForm: FormGroup;
    email
    password
    loggonInUser

  constructor(public authService:AuthService,private router: Router,private _formBuilder: FormBuilder) { 
    this.contactForm = this._formBuilder.group({
      email: "",
      password: ""
    });
   }
  ngOnInit(): void {
    this.authService.getCurrentUser()

  }
login(email,password){

  this.authService.signInUser(this.contactForm.value.email, this.contactForm.value.password)
  this.router.navigate(['']);
  this.loggonInUser = this.authService.userInfo
  }

}
