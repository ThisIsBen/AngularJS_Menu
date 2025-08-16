import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/client-order">Client Order</a> |
      <a routerLink="/admin-dashboard">Admin Dashboard</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `
})
export class App {
  protected readonly title = signal('frontend');
}

// import { Component } from '@angular/core';



// export class AppComponent {}


