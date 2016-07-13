import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { GlobalService } from './../../GlobalService';
import {Button} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-signup-form2-details',
  templateUrl: 'signup-form2-details.component.html',
  styleUrls: ['signup-form2-details.component.css'],
  directives:[ROUTER_DIRECTIVES, Button]
})

export class SignupForm2Details {
    constructor() {
        
    }
}
