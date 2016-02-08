
import {Component, OnInit, Injectable} from 'angular2/core';
// import {Task, TasksService} from './tasks.service.ts';
import {Router, RouteParams} from 'angular2/router';

import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Injectable()

@Component({

  templateUrl: 'assets/ng_app/templates/tasks/index.html'

  providers: [HTTP_PROVIDERS],

})

export class TasksListComponent {

  tasks: Object[];

  constructor(http: Http) {
    http.get('http://localhost:3000/tasks.json').subscribe(res => {
      this.tasks = res.json();
    });
  }

  // public taskStatus(task: Object){
  //   return if(task.is_completed) {
  //     console.log('test')
  //     'Completed'
  //   } else {
  //     'Incomplete'
  //   };
  // }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/