import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { GlobalService } from './../../GlobalService';
import {Button} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-tournament-details',
  templateUrl: 'tournament-details.component.html',
  styleUrls: ['tournament-details.component.css'],
  directives:[ROUTER_DIRECTIVES, Button]
})

export class TournamentProfile {
    constructor() {
        
    }
}

