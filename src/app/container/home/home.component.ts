import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, ControlGroup, Control } from '@angular/common';
import { Router } from '@angular/router'
import { GlobalService } from './../../GlobalService';
import {ROUTER_DIRECTIVES} from '@angular/router'
import {Button} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives : [ROUTER_DIRECTIVES, Button]
}) 

export class Home {
    constructor() {
        
    }
}

