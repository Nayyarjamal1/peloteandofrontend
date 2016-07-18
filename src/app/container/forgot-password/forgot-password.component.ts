import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { GlobalService } from './../../GlobalService';
import {Button} from 'primeng/primeng';
import {LoginService} from './../../services/login/login.service'


@Component({
    moduleId: module.id,
    selector: 'app-forgot-password',
    templateUrl: 'forgot-password.component.html',
    styleUrls: ['forgot-password.component.css'],
    directives: [ROUTER_DIRECTIVES, Button],
    providers: [LoginService]
})

export class ForgotPassword {
    
    show_email_field:boolean=true;
    
    constructor(private router: Router, private login_service: LoginService) {

    }

    resetPassword(x: any) {
        console.log(x)
        let url = this.login_service.baseUrl + '/peloteando/forgot/'
        if (x != null && x != undefined) {
            console.log("about to call forgetPasswordRequest method");
            let email: any = { "email": x };
            this.login_service.forgetPasswordRequest(email, url)
                .subscribe(res => {
                    console.log(res);
                    this.show_email_field=false;
                })
        }
    }

}

