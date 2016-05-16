import {Component, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FomssoService } from '../../services/fomsso/fomsso.service';

@Component({
    selector: 'login_view',
    directives: [LoginView],
    template: `
<h2 class="heading">Login</h2>

<form (submit)="login($event, username.value, password.value)">
   <label for="username">Username</label>
   <input type="text" #username class="form-control" id="username" placeholder="Username">
   
   <label for="password">Password</label>
   <input type="password" #password class="form-control" id="password" placeholder="Password">
   
   <button type="submit">Submit</button>
 </form>    `,
    providers: [FomssoService]
})

 export class LoginView {
    jwt: string;
    
    constructor( private _FomssoService:FomssoService ){}


    login(event, username, password) {
       event.preventDefault();
       this.fetchFommsso(username, password);
 
       if (this.jwt){
        localStorage.setItem('jwt', this.jwt);
              // this.router.parent.navigate('/home');
      }
    }

    fetchFommsso(username, password) {
      this._FomssoService.postFomsso(JSON.stringify({
        username, password
      }))
      console.log('login_view.fomsso_jwt=' + this._FomssoService.fomsso_jwt);
    }

    fetchOdin( username ) { }

}
    
