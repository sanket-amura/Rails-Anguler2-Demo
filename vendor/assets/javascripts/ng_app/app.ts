

import {Component, bootstrap, provide} from 'angular2/angular2';

import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS, ROUTER_BINDINGS

        LocationStrategy, HashLocationStrategy} from 'angular2/router';


// Home Component

import { HomeComponent } from 'assets/ng_app/components/home_componant.ts'

// About Us Component

import { AboutUsComponent } from 'assets/ng_app/components/about_us_component.ts'

// Task Component

import { TaskComponent } from 'assets/ng_app/components/task_component.ts'


// Root Component

@Component({

    selector: 'mainroot',

    templateUrl: 'assets/ng_app/templates/header.html',

    directives: [ ROUTER_DIRECTIVES]

})

@RouteConfig([

    {path: '/',        component: HomeComponent, as: 'Home'},

    {path: '/aboutus', component: AboutUsComponent, as: 'AboutUs'  },

    { path: '/tasks', component: TaskComponent, as: 'Task'}
])


class RootComponent{
}


bootstrap(RootComponent,  [ ROUTER_PROVIDERS, ROUTER_BINDINGS,
                            provide(LocationStrategy, {useClass: HashLocationStrategy})
                          ]
          );
