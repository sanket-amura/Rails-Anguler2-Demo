
import {Component, NgFor, View} from 'angular2/core';
import {HTTP_BINDINGS, Http} from 'angular2/http';

@Component({
  selector: 'mainroot',
  bindings: [HTTP_BINDINGS],
  template: `{{ people }}`,
  directives: [NgFor]
})

export class TaskComponent {
  public people: Object[];
  constructor(http:Http) {
    http.get('tasks.json').toRx().subscribe(res => {
      this.people = res.json();
    });
  }
  active:boolean = false;
  toggleActiveState() {
    this.active = !this.active;
  }
}

// bootstrap(TaskComponent)
//   .catch(err => console.error(err));
