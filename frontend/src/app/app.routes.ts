import { Routes } from '@angular/router';


import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard';
import { ClientOrderComponent } from './components/client-order/client-order';

export const routes: Routes = [
  { path: 'client-order', component: ClientOrderComponent },
  // other routes...
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '', redirectTo: '/client-order', pathMatch: 'full' }
];



