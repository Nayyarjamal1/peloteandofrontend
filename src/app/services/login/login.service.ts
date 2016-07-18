import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Http, Response, HTTP_PROVIDERS, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';

@Injectable()

export class LoginService {

    public requestoptions: RequestOptions;
    public res: Response;
    public headers: Headers;
    public url: string = 'http://football.innotical.com/api/peloteando/login/';
    public baseUrl = 'http://football.innotical.com/api';
    public urlFb: string = this.baseUrl + "/peloteando/fb_login/";
    public nameAndPass: string;
    public encode: string;

    constructor(public http: Http) { }


    //login request func
    loginRequest(data: any) {

        this.headers = new Headers();
        this.nameAndPass = data.name + ":" + data.password;
        console.log(this.nameAndPass);
        this.encode = btoa(this.nameAndPass);
        this.headers.append('Authorization', 'Basic ' + this.encode);
        console.log("inside method1");
        this.requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: this.url,
            headers: this.headers
        })
        return this.http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                return res.json();
            })
            .catch(error => {
                if (error.status === 401) {
                    console.log("inside error");
                    return Observable.throw(new Error(error.status));
                }
            });

    }
    //end of login req func

    //post req func
    public PostRequest(url: string, data: any): any {
        console.log("method called");
        this.headers = new Headers();
        this.headers.append("Content-Type", 'application/json');

        this.requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        })
        return this.http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                console.log(res, 'GLobal');
                return res;
            })

    }
    //end of post req

    checkLoginStatus(): boolean {
        if (localStorage.getItem("userInfo") !== null)
            return true;
        else
            return false;
    }

    // fb login req func
    fbLoginRequest(data: any, url: string) {

        this.headers = new Headers();
        console.log('inside fbloginrequest and data is' + data);
        this.requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: this.baseUrl + url,
            headers: this.headers,
            body: JSON.stringify(data)
        })
        return this.http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                return res.json();
            })

    }
    //end of fb login req func
    public forgetPasswordRequest(data: any, url: string): any {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        // this.headers.append("Authorization", 'Bearer ' + this.user_info.token.access_token);


        this.requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        })

        return this.http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                console.log(res, "Response")
                return res.json();
            })
    }
    // end of forgot password func

    public setPasswordRequest(data: any, myurl: string, aToken: string): any {
        console.log("method called");
        this.headers = new Headers();
        this.headers.append("Content-Type", 'application/json');
        this.headers.append("Authorization", 'Bearer ' + aToken)

        this.requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: myurl,
            headers: this.headers,
            body: JSON.stringify(data)
        })
        return this.http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                console.log(res, 'GLobal');
                return res;
            })

    }
}