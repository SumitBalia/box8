import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';


@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
    <router-outlet ></router-outlet>
    <app-footer></app-footer>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
