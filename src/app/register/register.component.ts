import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User
  currentUser
  public contactForm: FormGroup;

  constructor(public authService: AuthService, private route: Router,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    

    });
  }

  signUp() {


    // this.user = new User(this.firstName, this.lastName, this.email, this.password);
    this.authService.signUpUser(this.contactForm.value);
    this.route.navigate(['']);
    this.authService.getCurrentUser()
  }
}

