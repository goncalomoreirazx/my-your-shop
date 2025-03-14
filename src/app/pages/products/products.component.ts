import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Wireless Headphones', price: 129.99, image: 'assets/images/products/solo15.jpg', category: 'Electronics' },
    { id: 2, name: 'Smartphone', price: 699.99, image: 'https://via.placeholder.com/300', category: 'Electronics' },
    { id: 3, name: 'Coffee Maker', price: 89.99, image: 'https://via.placeholder.com/300', category: 'Home' },
    { id: 4, name: 'Running Shoes', price: 79.99, image: 'https://via.placeholder.com/300', category: 'Sports' },
    { id: 5, name: 'Backpack', price: 59.99, image: 'https://via.placeholder.com/300', category: 'Fashion' },
    { id: 6, name: 'Smartwatch', price: 199.99, image: 'https://via.placeholder.com/300', category: 'Electronics' },
    { id: 7, name: 'Desk Lamp', price: 49.99, image: 'https://via.placeholder.com/300', category: 'Home' },
    { id: 8, name: 'Winter Jacket', price: 149.99, image: 'https://via.placeholder.com/300', category: 'Fashion' },
    { id: 9, name: 'Blender', price: 69.99, image: 'https://via.placeholder.com/300', category: 'Home' },
    { id: 10, name: 'Yoga Mat', price: 29.99, image: 'https://via.placeholder.com/300', category: 'Sports' },
    { id: 11, name: 'Wireless Speaker', price: 129.99, image: 'https://via.placeholder.com/300', category: 'Electronics' },
    { id: 12, name: 'Monitor', price: 249.99, image: 'https://via.placeholder.com/300', category: 'Electronics' }
  ];

  categories: string[] = [...new Set(this.products.map(product => product.category))];
  selectedCategory: string = '';

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredProducts() {
    return this.selectedCategory 
      ? this.products.filter(product => product.category === this.selectedCategory)
      : this.products;
  }

  ngOnInit() {
    // Log the complete image path for debugging
    console.log('Image path:', this.products[0].image);
  }
}