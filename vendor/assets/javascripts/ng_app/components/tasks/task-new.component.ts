
import {Component} from 'angular2/core';

import {RouteParams, Router} from 'angular2/router';

import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
  templateUrl: 'assets/ng_app/templates/tasks/new.html',
  providers: [HTTP_PROVIDERS]
})

export class TaskNewComponent {

  constructor(
      private _http: Http,
      private _router: Router,
      private _routeParams: RouteParams
  ){}

  onSubmit(data) {
    let url = '/tasks.json?' + $.param(data)
    this._http.post(url, '', {}).subscribe(res => {
      if (res.json().save) {
        this.backToIndex();
      } else {
        alert('for Has some error.');
      }
    });
    // this.back();
  }

  backToIndex(){
    this._router.navigate(['Tasks']);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/