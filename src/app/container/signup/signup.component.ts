import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { GlobalService } from './../../GlobalService';
import {Button} from 'primeng/primeng';
import { LoginService } from '../../services/login/login.service';

class User {
  public password: string = "123456";
  public email: string = "@innotical.com";
  public first_name: string = "nayyar";
  public mobile: number = null;
  public dob: string = "2012-12-22";
}

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  directives: [ROUTER_DIRECTIVES, Button],
  providers:[LoginService]
})

export class Signup {
  signupForm:ControlGroup;
  userObj: User;
  
  constructor(fb: FormBuilder,private router: Router, private login_service:LoginService, private base_path_service:GlobalService) {
      this.userObj = new User();
      this.signupForm = fb.group({
        first_name:[this.userObj.first_name, Validators.compose([Validators.required, Validators.maxLength[50], Validators.maxLength[3]])],
        email:[this.userObj.email, Validators.compose([Validators.required])],
        password:[this.userObj.password, Validators.compose([Validators.required, Validators.maxLength[50], Validators.minLength[4]])],
        mobile:[this.userObj.mobile, Validators.compose([Validators.required, Validators.maxLength[10], Validators.minLength[3]])]
      })
  }

  signup() {
    var url = this.login_service.baseUrl+"/peloteando/user/";
    console.log("about to call postrequest", url, this.userObj);
    this.login_service.PostRequest(url, this.userObj)
      .subscribe(res => {
        console.log(res.status);
        this.router.navigate(['/signup-form1']);
      })
  }
}

	