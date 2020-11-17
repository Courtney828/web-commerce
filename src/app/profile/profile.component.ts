import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile
  constructor(public authServive:AuthService, public router:Router) { }
  
  ngOnInit(): void {
  this.userProfile = this.authServive.userInfo
  console.log(this.userProfile);
  
  }
  logout(){
    console.log("loggin out");
    this.authServive.logout()
    this.router.navigateByUrl("/login")

  }

}
