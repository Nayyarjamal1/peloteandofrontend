import 'rxjs/Rx';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide, PLATFORM_DIRECTIVES, enableProdMode } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

// import { GlobalService } from './app/GlobalService'

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS]);


// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { AppComponent, environment } from './app/';

// if (environment.production) {
//   enableProdMode();
// }

// bootstrap(AppComponent);

