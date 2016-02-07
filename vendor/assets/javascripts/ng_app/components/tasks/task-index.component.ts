import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {HTTP_BINDINGS, Http} from 'angular2/http';

// import {CrisisListComponent}   from './crisis-list.component.ts';
// import {CrisisDetailComponent} from './crisis-detail.component.ts';
// import {CrisisService}         from './crisis.service.ts';

@Component({
    template: `
    <h2>Tasks</h2>
    <router-outlet></router-outlet>
  `,
    directives: [RouterOutlet],
    providers: [CrisisService]
})
@RouteConfig([
    { path: '/', name: 'TaskIndex', component: TaskIndexComponent, useAsDefault: true }
    // { path: '/:id', name: 'TaskDetail', component: TaskDetailComponent }
])
export class TaskIndexComponent { 
  public tasks: Object[];
  constructor(http: Http) {
      http.get('tasks.json').toRx().subscribe(res => {
          this.tasks = res.json();
      });
  }

  active: boolean = false;
  
  toggleActiveState() {
      this.active = !this.active;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/