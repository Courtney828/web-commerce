import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public contactForm: FormGroup;
  email
  constructor(private _formBuilder: FormBuilder, private authenService: AuthService,private router: Router) { 
  this.contactForm = this._formBuilder.group({
    email: "",
  });
}
  ngOnInit(): void {
  }

onSubmit() {
  console.log("reset");

  this.authenService.resetPassword(this.contactForm.value.email)
  this.router.navigate(['/login']);
}

}

