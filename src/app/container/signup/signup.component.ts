import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { GlobalService } from './../../GlobalService';
import {Button} from 'primeng/primeng';
import { LoginService } from '../../services/login/login.service';

class User {
  public password: string = "123456";
  public email: string = "nayyarjamal@innotical.com";
  public first_name: string = "nayyar";
  public mobile: number = 999999999;
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
  
  userObj: User;
  
  constructor(private router: Router, private login_service:LoginService, private base_path_service:GlobalService) {
      this.userObj = new User();
  }

  signup() {
    var url = this.login_service.baseUrl+"/peloteando/user/";
    console.log("about to call postrequest", url, this.userObj);
    this.login_service.PostRequest(url, this.userObj)
      .subscribe(res => {
        console.log(res.status);
        // this.router.navigate(['/signup-form1']);
      })
  }
}