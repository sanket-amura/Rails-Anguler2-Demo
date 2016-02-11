import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

import { TasksListComponent }   from './tasks-list.component.ts';
import { TaskNewComponent } from './task-new.component.ts';
import { TaskDetailsComponent } from './task-details.component.ts'
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
  template: `
    <div class="page-header">
      <h1>Tasks</h1>
      <a [routerLink]="['./NewTask']" class='btn btn-primary pull-right new-btn' >Add New Task</a>
    </div>
    <router-outlet></router-outlet>
    <a [routerLink]="['./Tasks']" class='btn btn-default pull-right' > Back </a>`,

  directives: [RouterOutlet, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS],
  // providers: []
})
@RouteConfig([
  { path: '/', name: 'Tasks', component: TasksListComponent, useAsDefault: true },
  { path: '/new', name: 'NewTask', component: TaskNewComponent },
  { path: '/:id', name: 'TaskDetails', component: TaskDetailsComponent }
])
export class TaskCenterComponent {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/