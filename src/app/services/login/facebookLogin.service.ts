import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

declare const FB:any;

@Injectable()

export class FacebookService
{
    public key:string=null;
    public obj:any=null;
    

    constructor(public router:Router,private login_service:LoginService) {
        FB.init({
            appId      : '298764690458377',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
    }

    onFacebookLoginClick() {
        
        // console.log("inside login");
        FB.login( (response) => {
          
            this.getAccessToken1();
            
        }, {scope: 'email,user_about_me,user_hometown,user_friends,user_status,user_relationship_details,user_birthday,user_likes,user_posts,user_photos'});
        
        //         FB.api('/me?fields=id,name,email', function(response) {
      
// });
    }
   
   
    getAccessToken1():any
    {
        this.obj=FB.getAuthResponse();
       console.log("inside get token");
       if(this.obj!=null)
       {
      this.key=this.obj.accessToken;
       this.hitApi();
       }
       
    }

    statusChangeCallback(resp) {
        console.log("inside status change callback");
        if (resp.status === 'connected') {
               console.log("inside if");
             this.getAccessToken1();
             
            // connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {
            console.log("inside elseif");
            
        }else {
           console.log("inside else");
            this.onFacebookLoginClick();
            
        }
    };

  ngOnInit() {
            FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
  }
  fbLoginStatus()
  {
      console.log("inside fbLoginStatus");
      FB.getLoginStatus(response => {
    this.statusChangeCallback(response);
        });
   
  }


  hitApi():any
  {
      console.log("about to hit api and data is"+this.key);
      let fbObj={"access_token":this.key};
      this.login_service.PostRequest(fbObj,"/peloteando/fb_login/")
      .subscribe(res => {
      console.log(res,"response returned");
      localStorage.setItem("userInfo",JSON.stringify(res));
      localStorage.setItem("fbToken",this.key);
      this.router.navigate(["/DashBoardComponent"]);
      })
  }
    
}