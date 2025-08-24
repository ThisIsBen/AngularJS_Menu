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
    { name: 'Bak kut Teh', description: 'Creamy pasta with pancetta' ,count:0},
    { name: 'Hawaii Pizza', description: 'Classic pizza with tomato and mozzarella' ,count:0},
    { name: 'Caesar Salad', description: 'Crisp romaine with Caesar dressing' ,count:0},
    { name: 'Grilled Salmon', description: 'Fresh salmon with lemon butter' ,count:0},
    { name: 'Sirloin Steak', description: 'Spicy beef with fresh toppings' ,count:0},
    { name: 'Chocolate Lava Cake', description: 'Warm cake with molten center' ,count:0},
  ];

  constructor(private orderService: OrderService) {}

  submitOrder() {
    const order = this.dishes.filter(d => d.count > 0);
    this.orderService.placeOrder(order).subscribe();
  }
}

