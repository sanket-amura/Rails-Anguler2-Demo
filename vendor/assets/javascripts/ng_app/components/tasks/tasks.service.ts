
import {Injectable} from 'angular2/core';

import {HTTP_PROVIDERS, Http} from 'angular2/http';

export class Tasks {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public is_completed: boolean,
    public priority: boolean,
  ){}
}

// @Injectable()
// export class TasksService {
//   getCrises() {
//     return tasksPromise;
//     //   // return Http.get('tasks.json').toRx().subscribe(res => {
//     //   //     tasks = res.json();
//     //   // });
//     // Jsonp.request('people.json').subscribe(res => {
//     //   this.tasks = res.json();
//     // });
//   }

//   getTasks(id: number | string) {
//     return tasksPromise
//         .then(tasks => tasks.filter(c => c.id === +id)[0]);
//   }


//   static nextTaskId = 100;

//   addTasks(name: string) {
//       name = name.trim();
//       if (name) {
//           let t = new Tasks(TasksService.nextTaskId ++, name);
//           tasksPromise.then(tasks => tasks.push(t));
//       }
//   }
// }

// var tasks = [
//     new Tasks('1', 'Princess Held Captive', '', true, true ),
//     new Tasks('2', 'Dragon Burning Cities', '', true, true),
//     new Tasks('3', 'Giant Asteroid Heading For Earth', '', true, true),
//     new Tasks('4', 'Release Deadline Looms', '', true, true)
// ];

// var tasks = Http.get('tasks.json').toRx().subscribe(res => {
//       tasks = res.json();
//     });

// var tasksPromise = Promise.resolve(tasks);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/