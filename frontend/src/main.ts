

import 'zone.js';  // Required for Angular


import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ClientOrderComponent } from './app/components/client-order/client-order';
import { AdminDashboardComponent } from './app/components/admin-dashboard/admin-dashboard';
import { SetupMenuComponent } from './app/components/dish-card/setup-menu.component';// import <app-dish-card>
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

// bootstrapApplication(ClientOrderComponent, {
//   providers: [provideRouter(routes)]
// })  .catch((err) => console.error(err));




bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'client-order', pathMatch: 'full' },
      { path: 'client-order', component: ClientOrderComponent },
      { path: 'setup-menu', component: SetupMenuComponent },
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      
    ]),
    provideHttpClient() // ✅ This is the key fix
  ]
}) .catch((err) => console.error(err));



