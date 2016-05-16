import { Component } from '@angular/core';
import { FomssoService } from '../../services/fomsso/fomsso.service';

import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { RouterOutlet, RouteConfig, RouteDefinition } from '@angular/router-deprecated';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';


@Component({
    selector: 'home',
    directives:[ROUTER_DIRECTIVES],
    templateUrl: './app/components/home/home.html',
    providers: [FomssoService]
})

export class Home {
  	jwt: string;
  	decodedJwt: string;

    constructor( private _FomssoService: FomssoService) {
     	this.jwt = localStorage.getItem('jwt');
    	// this.decodedJwt = this.jwt && jwt_decode(this.jwt);
    }

 
	logout() {
	    // Method to be called when the user wants to logout
	    // Logging out means just deleting the JWT from localStorage and redirecting the user to the Login page
	    localStorage.removeItem('jwt');
	    // this.router.parent.navigate('/login');
	}

    

    callApi() {
		this.fetchFommsso('jcassidy', 'mypassword')
	} 


    fetchFommsso (username, password){
        this._FomssoService.postFomsso(JSON.stringify({
            username, password
        }));
        // console.log(JSON.stringify({ username, password }));
        console.log('home.fomsso_jwt=' + this._FomssoService.fomsso_jwt);
    }
 
}