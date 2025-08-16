import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.html',
  styleUrls: ['./client-order.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ClientOrderComponent  {
  dishes = [
    { name: 'Pizza', count: 0 },
    { name: 'Burger', count: 0 },
    { name: 'Pasta', count: 0 }
  ];

  constructor(private orderService: OrderService) {}

  submitOrder() {
    const order = this.dishes.filter(d => d.count > 0);
    this.orderService.placeOrder(order).subscribe();
  }
}

