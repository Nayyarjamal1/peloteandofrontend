import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { GlobalService } from './../../GlobalService';
import {Button} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives:[ROUTER_DIRECTIVES, Button]
})

export class Login {
  
    first_time:boolean=true;
    constructor(private router :Router) {
        
    }
    
    login(){
      if(this.first_time == true){
        this.router.navigate(['/signup-form1']);
      }else {
        this.router.navigate(['/dashboard']);
      }
    }
}

