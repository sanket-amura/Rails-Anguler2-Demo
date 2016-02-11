import {Component, OnInit} from 'angular2/core';

import {RouteParams, Router} from 'angular2/router';

import {HTTP_PROVIDERS, Http} from 'angular2/http';


@Component({
    templateUrl: 'assets/ng_app/templates/tasks/show.html',
    // template: `task {{ task_id}}`,
    providers: [HTTP_PROVIDERS],
})

export class TaskDetailsComponent implements OnInit {

  task: {};
  task_name: string;
  task_id: string;
  task_description: string;
  task_is_completed: boolean;

  constructor(
    private _http: Http,
    private _router: Router,
    private _routeParams: RouteParams
  ) {}

  ngOnInit() {
    let url = '/tasks/' + this._routeParams.get('id') + '.json';
    this._http.get(url).subscribe(res => {
        // console.log(res.json());
        this.task = res.json();
        this.task_name = this.task.name;
        this.task_id = this.task._id.$oid;
        this.task_description = this.task.description;
        this.task_is_completed = this.task.is_completed;
    });
  }

}