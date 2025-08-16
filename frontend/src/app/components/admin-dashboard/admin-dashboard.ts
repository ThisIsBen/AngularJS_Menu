import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-admin-dashboard',
//   imports: [],
//   templateUrl: './admin-dashboard.html',
//   styleUrl: './admin-dashboard.css'
// })
// export class AdminDashboard {

// }





@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css'],
  imports: [CommonModule], // ✅ This enables *ngFor and other common directives

})
export class AdminDashboardComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.onNewOrder((order) => {
      this.orders.push(order);
    });
  }
}
