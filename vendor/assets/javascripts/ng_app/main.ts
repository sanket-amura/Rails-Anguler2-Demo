import {provide} from 'angular2/core';

import {bootstrap}        from 'angular2/platform/browser';

import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';

import {AppComponent}     from './components/app.component.ts';

// import {HTTP_PROVIDERS, Http} from 'angular2/http';

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/#/' }]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/