import { Component, Input,ChangeDetectorRef  } from '@angular/core';
import { Dish } from './dish.model';
import { CommonModule } from '@angular/common'; // ✅ Import this for *ngif


@Component({
  selector: 'app-dish-card',
  standalone: true,
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css'],
  imports: [CommonModule], // ✅ Add this to use *ngIf
  

})
export class DishCardComponent {
  @Input() dish!: Dish;

  constructor(private cdr: ChangeDetectorRef) {}


  onPhotoUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {

      // For client side view selected images only. No upload to server
      // const reader = new FileReader();
      // reader.onload = () => {
      //   this.dish.imageUrl = reader.result as string;
      //   this.cdr.detectChanges(); // 👈 manually trigger change detection
      // };
      // reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('dishImage', file);

      fetch('http://localhost:3000/api/orders/setupMenu', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        this.dish.imageUrl = data.imageUrl;
        this.cdr.detectChanges(); // 👈 manually trigger change detection
      })
      .catch(err => console.error('Upload error:', err));

      
    }
  }
}


