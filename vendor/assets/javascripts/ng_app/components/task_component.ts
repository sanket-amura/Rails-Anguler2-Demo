import {Component, bootstrap, provide, NgFor} from 'angular2/angular2';
//import {Http, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';


// @Injectable()

//class TaskApi {
//  constructor(private http: Http) {}
//
//  getTasks(query) {
//    const endpoint = 'tasks.json';
//    //const searchParams = new URLSearchParams()
//    //searchParams.set('api-key', API_KEY);
//    //searchParams.set('q', query);
//
//    return this.http
//      .get(endpoint)
//      //.get(endpoint, {search: searchParams})
//      .map(res => res.json())
//      .map(res => res.response.docs);
//  }

//  postExample(someData) {
//    return this.http
//      .post('https://yourEndpoint', JSON.stringify(someData))
//      .map(res => res.json());
//  }
//}





@Component({

    selector: 'mainroot',

    templateUrl: 'assets/ng_app/templates/tasks/index.html',

    //providers: [HTTP_PROVIDERS, TaskApi]
    directives: [NgFor]

})

export class TaskComponent {
  // http: Http;
  public tasks = [{ id: 1, description: 'Test' }, { id: 2, description: 'Test 1'}];

}

bootstrap(TaskComponent);


// https://html5hive.org/getting-started-with-angular-2/
