import { provideRouter, RouterConfig }  from '@angular/router';
import {Home} from './container/home/home.component';
import {Login} from './container/login/login.component';
import {Signup} from './container/signup/signup.component';
import {Dashboard} from './container/dashboard/dashboard.component'
import {dashboardRoutes}  from './container/dashboard/dashboard.routes'

export const routes: RouterConfig = [
    ...dashboardRoutes,
    { path: '', component: Home},
    { path: 'home', component: Home},
    { path: 'login', component: Login},
    { path: 'signup', component: Signup},
    { path: 'dashboard', component: Dashboard},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];