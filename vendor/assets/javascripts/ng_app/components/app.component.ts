import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisCenterComponent} from './crisis-center/crisis-center.component.ts';
import {TaskCenterComponent} from './tasks/task-center.component.ts';
import {HeroListComponent}     from './heroes/hero-list.component.ts';
import {HeroDetailComponent}   from './heroes/hero-detail.component.ts';

import {DialogService}         from '../dialog.service.ts';
import {HeroService}           from './heroes/hero.service.ts';

import {Http, Headers} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

// import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
  selector: 'my-app',
  templateUrl: 'assets/ng_app/templates/header.html',
  providers:  [DialogService, HeroService],
  directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
@RouteConfig([

  { // Crisis Center child route
    path: '/crisis-center/...',
    name: 'CrisisCenter',
    component: CrisisCenterComponent,
    useAsDefault: true
  },
  { path: '/tasks-center/...', name: 'TasksCenter', component: TaskCenterComponent },
  {path: '/heroes',   name: 'Heroes',     component: HeroListComponent},
  {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
  {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
])
export class AppComponent {
  constructor(public http: Http) {}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/