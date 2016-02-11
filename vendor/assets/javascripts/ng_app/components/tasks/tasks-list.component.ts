
import {Component, OnInit} from 'angular2/core';

import {NgClass} from 'angular2/common';

import {RouteConfig, Router, RouteParams} from 'angular2/router';

import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({

  templateUrl: 'assets/ng_app/templates/tasks/index.html'

  providers: [HTTP_PROVIDERS]

  // directives: [NgClass]

})

export class TasksListComponent implements OnInit {

  tasks: Object[];
  allTasks: Object[];


  isOn = false;
  isDisabled = false;



  is_save: boolean;

  constructor(
    private _http: Http,
    private _router: Router,
    private _routeParams: RouteParams ) {

  }

  ngOnInit() {
    this._http.get('/tasks.json').subscribe(res => {
      this.tasks = res.json();
      this.allTasks = res.json();
    });
  }

  onSelect(task) {
    this._router.navigate(['TaskDetails', { id: task._id.$oid }]);
  }

  onDelete(task){
      let url = '/tasks/' + task._id.$oid + '.json'
      this._http.delete(url).subscribe(res => {
          this.tasks = res.json();
      });
  }

  toggleStatus(task){

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = '/tasks/' + task._id.$oid + '.json?' + $.param({ task: { is_completed: !task.is_completed } });
    this._http.put(url, '', { headers: headers }).subscribe(res => {
      if (res.json().save) {
        let aa = this.tasks.filter(c => c._id.$oid === task._id.$oid)[0];
        aa.is_completed = !task.is_completed;
      } else {
        alert('for Has some error.');
      }
      // this.is_save = res.json().save;
    });
  }

  backToIndex() {
    this._router.navigate(['Tasks']);
  }

  fetchAll(){
    this.tasks = this.allTasks;
  }

  fetchCompleted() {
    this.tasks = this.allTasks.filter(t => t.is_completed == true);
  }

  fetchIncompleted(){
    this.tasks = this.allTasks.filter(t => t.is_completed == false);
  }


}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/