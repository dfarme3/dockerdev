

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { RouterOutlet, RouteConfig, RouteDefinition } from '@angular/router-deprecated';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import 'rxjs/Rx';
import { contentHeaders } from '../contentheaders';
import { requestOptions } from '../requestoptions';

@Injectable()
export class FomssoService {
	private _url: string = 'https://medtechauth.ca/auth'; 
    public id: number;
    public fomsso_jwt: string;

    constructor(  public http: Http ) {
    }

    public postFomsso(body: string) {
        let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json' });
        let options = new RequestOptions({
            headers: headers,
            method: "POST",
            url: this._url
        });
        // console.log(body);
        // console.log(options.headers.get('Content-Type'));


        return this.Http.request('get_auth_data.json')
            .subscribe(response => {
                this.fomsso_jwt = response.json().token;
                localStorage.setItem('jwt', response.json().token);
                console.log('fomsso.post=' + response.json())
            },
            error => {
                console.log('fomsso.post.error=' + error.text());
                console.log(error.json());
            }
            );
        // return this.http.request('get_auth_data.json')
        //     .subscribe(response => {
        //         this.fomsso_jwt = response.json().token;
        //         localStorage.setItem('jwt', response.json().token);
        //         console.log('fomsso.post=' + response.json())
        //     },
        //     error => {
        //         console.log('fomsso.post.error=' + error.text());
        //         console.log(error.json());
        //     }
        //     );

        // return this.http.post( this._url, body, options )
        //    .subscribe(
        //        response => {
        //            this.fomsso_jwt = response.json().token;
        //            // localStorage.setItem('jwt', response.json().token);
        //            // this.router.parent.navigateByUrl('/home');
        //            console.log('fomsso.post=' + response.json())
        //        },
        //        error => {
        //            // alert(error.text());
        //            console.log('fomsso.post.error=' + error.text());
        //            console.log(error.json());
        //        }
        //    );
    //        .map(res => res.json())
    //        .catch(this.handleError);

    }
   

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error using FOMSSO Service');
    }

}