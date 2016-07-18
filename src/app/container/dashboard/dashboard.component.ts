import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators, ControlGroup, Control } from '@angular/common';
import { Router, ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import { GlobalService } from './../../GlobalService';
import {Button} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives:[ROUTER_DIRECTIVES, Button]
})


export class Dashboard implements OnInit{
  
    tournamentList:Array<any>=[];
  
    constructor(private base_path_service:GlobalService) {
        
    }
    
    ngOnInit(){
      this.API_getTournamentList();
    }
    
    API_getTournamentList(){
      
      var url = this.base_path_service.base_path_api()+"tournament/tournamentDetail/";
      this.base_path_service.GetRequest(url)
        .subscribe(
          res=>{
            console.log(res[0].json);
            this.tournamentList = res[0].json;
          },
          err=>{
            console.log("error")
        })
    }
}