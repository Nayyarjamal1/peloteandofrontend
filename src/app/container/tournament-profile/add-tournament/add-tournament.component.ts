import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { GlobalService } from './../../../GlobalService';

@Component({
  moduleId: module.id,
  selector: 'app-add-tournament',
  templateUrl: 'add-tournament.component.html',
  styleUrls: ['add-tournament.component.css'],
  directives:[ROUTER_DIRECTIVES]
})

export class AddTournament {
    constructor() {
        
    }
}

