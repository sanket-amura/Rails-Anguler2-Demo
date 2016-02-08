
import {Component, OnInit} from 'angular2/core';
import {Task, TasksService} from './tasks.service.ts';
import {Router, RouteParams} from 'angular2/router';

// import {HTTP_PROVIDERS, Http} from 'angular2/http';

// @Injectable()

@Component({

  templateUrl: 'assets/ng_app/templates/tasks/index.html'

  //   template: `
  //   <ul>
  //     Tasks
  //   </ul>
  // `,
    // viewProviders: [JSONP_PROVIDERS]

  // providers: [HTTP_PROVIDERS],
  // bindings: [HTTP_BINDINGS]
})

export class TasksListComponent implements OnInit {
    tasks: Tasks[];

    private _selectedId: number;

    constructor(
        private _service: TasksService,
        private _router: Router,
        routeParams: RouteParams) {
        this._selectedId = +routeParams.get('id');
    }

    isSelected(t: Tasks) { return t.id === this._selectedId; }

    ngOnInit() {
        this._service.getCrises().then(tasks => this.tasks = tasks);
    }

    onSelect(t: Tasks) {
        this._router.navigate(['TaskDetail', { id: t.id }]);
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/