import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, provideRouter } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ROUTER_DIRECTIVES],
  // providers : [provideRouter]
})
export class AppComponent {
  title = 'app works!';
}
