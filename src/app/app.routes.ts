import { provideRouter, RouterConfig }  from '@angular/router';
import {Home} from './container/home/home.component';
import {Login} from './container/login/login.component';
import {Signup} from './container/signup/signup.component';
import {Dashboard} from './container/dashboard/dashboard.component'
import {dashboardRoutes}  from './container/dashboard/dashboard.routes'
import {SignupForm1Details} from './container/signup-form1-details/signup-form1-details.component';
import {SignupForm2Details} from './container/signup-form2-details/signup-form2-details.component'

export const routes: RouterConfig = [
    ...dashboardRoutes,
    { path: '', component: Home},
    { path: 'home', component: Home,
      children: [
      { path: 'login', component: Login},
      {path: 'signup', component: Signup}
    ]},
    // { path: 'login', component: Login},
    // { path: 'signup', component: Signup},
    { path: 'dashboard', component: Dashboard},
    { path: 'signup-form1', component: SignupForm1Details},
    { path: 'signup-form2', component: SignupForm2Details},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];