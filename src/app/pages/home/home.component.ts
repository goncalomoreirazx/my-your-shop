import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredProducts = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Product 3', price: 49.99, image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Product 4', price: 59.99, image: 'https://via.placeholder.com/300' }
  ];
}