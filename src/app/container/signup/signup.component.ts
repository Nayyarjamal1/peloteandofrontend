import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { GlobalService } from './../../GlobalService';
import {Button} from 'primeng/primeng';
import {Checkbox} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  directives:[ROUTER_DIRECTIVES, Button,Checkbox]
})

export class Signup {
    constructor(private router:Router) {
        
    }

    signup(){
      this.router.navigate(['/signup-form1']);
    }
}