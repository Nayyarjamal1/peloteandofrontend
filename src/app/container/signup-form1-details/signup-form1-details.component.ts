import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { GlobalService } from './../../GlobalService';
import {Button} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-signup-form1-details',
  templateUrl: 'signup-form1-details.component.html',
  styleUrls: ['signup-form1-details.component.css'],
  directives:[ROUTER_DIRECTIVES, Button]
})

export class SignupForm1Details {
    constructor() {
        
    }
}
