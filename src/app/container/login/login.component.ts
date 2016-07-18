import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, Validator, AbstractControl, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { GlobalService } from './../../GlobalService';
import {Button, Messages} from 'primeng/primeng';
import {LoginService} from './../../services/login/login.service';
// import {FacebookService} from './../../services/login/facebookLogin.service'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

class loginData {
  "name": "";
  "password": "";
}

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES, Button, Messages],
  providers: [LoginService]
})

export class Login {

  loginForm: ControlGroup;
  name1: boolean = false;
  pass1: boolean = false;
  visibility: boolean = false;
  summary: string;
  detail: string;
  token: string;
  msgs: Array<any> = [];
  uData: any;
  accessToken: string = null;
  loginDataIns;
  fbApi: string = '/peloteando/fb_login/';
  fbResponse: any;
  first_time: boolean = true;

  constructor(private fb: FormBuilder, private router: Router, private base_path_service: GlobalService, private login_service: LoginService) {
    this.loginDataIns = new loginData();
    this.loginForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      pass: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    })
    // if (this.login_service.checkLoginStatus())
    //   this.router.navigate(['/dashboard']);
  }

  ngOnInit() { }

  login(data: any) {    
    console.log(data.name)
    this.login_service.loginRequest(data)
      .subscribe(
        res => {
          console.log(res[0]);
          localStorage.setItem("userInfo", JSON.stringify(res[0]));
          if (res[0].info.first_time == true) {
            this.router.navigate(["/signup-form1"]);
          } else {
            this.router.navigate(["/dashboard"]);
          }
        },
        err => {
          if (err.status === 401)
            console.log("got error object");
        })
    }

  getStyle(ele: string) {
    if (!this.loginForm.controls[ele].valid) {
      this.visibility = true;
      this.msgs = [];
      if (ele === 'name') {
        this.name1 = true;
        this.summary = "Name";
        this.detail = "can't be Empty";
      }
      else if (ele === 'pass') {
        this.pass1 = true;
        this.summary = "Password";
        this.detail = `Can't be empty
                   * Must have at least 6 characters`;
      }
      this.msgs.push({ severity: 'error', summary: this.summary, detail: this.detail });

    }
  }

  setVisibilityFalse(ele: string) {
    this.visibility = false;
    if (ele === 'name')
      this.name1 = false;
    else if (ele === 'pass')
      this.pass1 = false;
    this.msgs = [];
  }

  // facebookLogin(x: any) {
  //   this.facebook_service.fbLoginStatus();

  // }

  passwordReset(x: any) {
    let url = this.login_service.baseUrl + '/peloteando/forgot/'
    if (x != null && x != undefined) {
      console.log("about to call forgetPasswordRequest method");
      let email: any = { "email": x };
      this.login_service.forgetPasswordRequest(email, url)
        .subscribe(res => {
          console.log(res);
        })
    }
  }


}


















