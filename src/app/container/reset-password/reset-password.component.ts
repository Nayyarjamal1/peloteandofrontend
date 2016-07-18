import { Component, OnInit } from '@angular/core';
import { LoginService} from './../../services/login/login.service';
import {Router} from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'app-reset-password',
  templateUrl: 'reset-password.component.html',
  styleUrls: ['reset-password.component.css'],
  providers:[LoginService]
})
export class ResetPasswordComponent implements OnInit {

userKey:UserKey;
public aToken:string;
public uid:number;
public newPass:string;
  constructor(private login_service:LoginService, private router:Router) {
    this.userKey=new UserKey();
  }

  ngOnInit() {
  }
  
  verifyKey()
  {
    let url:string=this.login_service.baseUrl+'/peloteando/reset_password/';
   console.log("method called");
  this.login_service.forgetPasswordRequest(this.userKey,url)
  .subscribe(res => {
          localStorage.setItem("forget",JSON.stringify(res));
          this.aToken=res.token.acces_token;
          this.uid=res.info.account_id;
        })

  }
  setPassword()
  {
    let a:any={"user_id":this.uid,
  "new_password":this.newPass};
  let url="http://football.innotical.com/api/peloteando/set_password/";
  this.login_service.setPasswordRequest(a,url,this.aToken)
  .subscribe(res => {
          console.log(res.status);
          if(localStorage.getItem("forget")!=null)
            localStorage.removeItem("forget");
            if(res.status==205){
                this.router.navigate(['/home', 'login'])
            }
        })
  }

}
class UserKey
{
  public user:string='4d20390c0146e9bdfdb7c94d51a05892c809b10a4d1ef869f26b65d18d9aa587';
  public key:string='7efcdbf5e4dfbf464a7e92a5885de990';
}
