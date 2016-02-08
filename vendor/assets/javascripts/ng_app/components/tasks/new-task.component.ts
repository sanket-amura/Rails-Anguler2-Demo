
import {Component} from 'angular2/core';

import { CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/comman';

// import {Router, RouteParams} from 'angular2/router';

// import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
    // selector: 'my-app',
    template: `
    <div>
      <h2>NgFormModel Example</h2>
      <form [ngFormModel]="loginForm">
        <p>Login: <input type="text" ngControl="login"></p>
        <p>Password: <input type="password" ngControl="password"></p>
      </form>
      <p>Value:</p>
      <pre>{{value}}</pre>
    </div>
  `,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class TasksListComponent {}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/