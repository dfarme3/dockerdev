import { HTTP_PROVIDERS } from '@angular/http';
import { Component, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
// import {ROUTER_DIRECTIVES, RouteConfig, Location,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router, AuxRoute} from '@angular/router';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { RouterOutlet, RouteConfig, RouteDefinition } from '@angular/router-deprecated';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LoggerService } from './services/logger/logger.service';

import { Home } from './components/home/home';
import { LoginView } from './components/login/login_view';
import { StudentProfile } from './components/student/student_profile';

@Component(
{
    selector: 'tss-app',
    template: `
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li *ngFor="let route of routes"><a [routerLink]="[route.name]">{{route.name}}</a></li>
      </ul>
    </div>
 <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})

@Routes([
    { path: '/',       			    component: Home },
    { path: '/login', 			    component: LoginView },
    { path: '/student/profile', 	component: StudentProfile }
])

class MainApp {
    private logger: LoggerService;

    constructor(logger: LoggerService) {
        this.logger = logger;
    }

}

bootstrap(MainApp,[
    LoggerService, ROUTER_PROVIDERS
]);


// https://github.com/antonybudianto/angular2-starter
// https://github.com/angular/angular/milestones