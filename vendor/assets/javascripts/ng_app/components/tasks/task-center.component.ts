import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import { TasksListComponent }   from './tasks-list.component.ts';
// import { NewTaskComponent } form './new-task.component.ts';
// import {CrisisDetailComponent} from './crisis-detail.component.ts';
// import {HTTP_PROVIDERS, Http} from 'angular2/http';
// import {TasksService}         from './tasks.service.ts';

@Component({
  template: `
    <router-outlet></router-outlet>
    `,
  directives: [RouterOutlet],
  // providers: []
})
@RouteConfig([
  { path: '/', name: 'TasksCenter', component: TasksListComponent, useAsDefault: true }
  // { path: '/new', name: 'NewTask', component: NewTaskComponent }
])
export class TaskCenterComponent {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/