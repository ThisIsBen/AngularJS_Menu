import { Component } from '@angular/core';
import { Dish } from './dish.model';// import Dish type for creating dish objects
import { DishCardComponent } from './dish-card.component';// import <app-dish-card>
import { CommonModule } from '@angular/common'; // ✅ This enables *ngFor and other directives




@Component({
  selector: 'app-setup-menu',
  standalone: true, // ✅ Required for imports to work
  imports: [DishCardComponent,CommonModule], // ✅ Import the standalone component
  templateUrl: './setup-menu.component.html',
  
  

})
export class SetupMenuComponent {
  dishes: Dish[] = [
    { name: 'Bak kut Teh', description: 'Creamy pasta with pancetta' },
    { name: 'Hawaii Pizza', description: 'Classic pizza with tomato and mozzarella' },
    { name: 'Caesar Salad', description: 'Crisp romaine with Caesar dressing' },
    { name: 'Grilled Salmon', description: 'Fresh salmon with lemon butter' },
    { name: 'Sirloin Steak', description: 'Spicy beef with fresh toppings' },
    { name: 'Chocolate Lava Cake', description: 'Warm cake with molten center' },
  ];
}



