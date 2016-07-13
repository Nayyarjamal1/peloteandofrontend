import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { GlobalService } from './../../GlobalService';
import {Button} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-tournament-profile',
  templateUrl: 'tournament-profile.component.html',
  styleUrls: ['tournament-profile.component.css'],
  directives:[ROUTER_DIRECTIVES, Button]
})

export class TournamentProfile {
    constructor() {
        
    }
}

