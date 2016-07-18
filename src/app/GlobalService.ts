import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Route, Router } from "@angular/router";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

declare var jQuery: any;
declare var toastr: any;

@Injectable()
export class GlobalService {
    user_info: any;
    public base_path: string;
    public headers: Headers;
    public requestoptions: RequestOptions;
    public res: Response;

    constructor(public http: Http, public router: Router) {
        this.user_info = JSON.parse(localStorage.getItem('userInfo'));
        this.base_path = "http://football.innotical.com/";
    }

    public base_path_api() {
        return this.base_path + 'api/';
    }

    public getRequsetOptions(url: string): RequestOptions {

        this.headers = new Headers();
        this.headers.append("Content-type", "application/json");
        this.headers.append("Authorization", 'Bearer ' + this.user_info.token.acces_token);
        this.requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: url,
            headers: this.headers
        });

        return this.requestoptions;
    }

    public getRequsetOptionsUnauthorised(url: string): RequestOptions {

        this.headers = new Headers();
        this.headers.append("Content-type", "application/json");

        this.requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: url,
            headers: this.headers
        });

        return this.requestoptions;
    }


    public PostRequest(url: string, data: any): any {
        
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
        // if (this.user_info) {
        //     this.headers = new Headers();
        //     this.headers.append("Content-type", "application/json");
        //     this.headers.append("Authorization", 'Bearer ' + this.user_info.token.access_token);
        // } else {
        //     this.headers = new Headers();
        //     this.headers.append("Content-type", "application/json");
        //     console.log("nsdksahdu")
        // }

        this.requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        })
        
        console.log(this.requestoptions)
        
        return this.http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                if (res.status === 201) {
                    // toastr.error('Conflict ! There Might Be somthing wrong ! 409');
                    return [{ status: res.status, json: res.json() }]
                }
                else if (res.status === 205) {
                    // toastr.error('Conflict ! There Might Be somthing wrong ! 409');
                    return [{ status: res.status, json: res.json() }]
                }
                else if (res.status === 200) {
                    // toastr.error('okay ! 200');
                    return [{ status: res.status, json: res.json() }]
                }
            })
            .catch((error: any) => {
                if (error.status === 500) {
                    return Observable.throw(error);
                }
                else if (error.status === 400) {
                    return Observable.throw(error);
                }
                else if (error.status === 409) {
                    return Observable.throw(error);
                }
                else if (error.status === 406) {
                    return Observable.throw(error);
                }
                else if (error.status === 404) {
                    console.log(error.text());
                    // toastr.error('Conflict ! There Might Be somthing wrong ! 400');
                    return Observable.throw(error);
                }
            });
    }

    public GetRequest(url: string): any {

        return this.http.request(new Request(this.getRequsetOptions(url)))
            .map((res: Response) => {
                let jsonObj: any;
                if (res.status === 204) {
                    // toastr.warning('No Content Found !');
                    jsonObj = null;
                }
                else if (res.status === 500) {
                    // toastr.error('Data Is not Present For Now !');
                    jsonObj = null;
                }
                else if (res.status !== 204) {
                    // toastr.success('Data Fetched From Server');
                    jsonObj = res.json()
                }
                return [{ status: res.status, json: jsonObj }]
            })
            .catch(error => {
                if (error.status === 403) {
                    // toastr.error("You don't Have Permission to Access this Page!");
                    return Observable.throw(new Error(error.status));
                }
                else if (error.status === 400) {
                    // toastr.error("Bad Request! 400");
                    return Observable.throw(new Error(error.status));
                }
            });
    }

    getVarification(url: string) {

        return this.http.request(new Request(this.getRequsetOptions(url)))
            .map(res => {
                if (res) {
                    if (res.status === 200) {
                        return [{ status: res.status, json: null }]
                    }
                }
            }).catch((error: any) => {
                // console.log(error.status, "service")
                if (error.status === 409) {
                    return Observable.throw(new Error(error.status));
                }
            });
    }
}


