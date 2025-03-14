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
    { id: 2, name: 'Smartphone', price: 699.99, image: 'assets/images/products/zhou.jpg', category: 'Electronics' },
  { id: 3, name: 'Coffee Maker', price: 89.99, image: 'https://images.unsplash.com/photo-1512151004577-b150e2da1fcd?w=500', category: 'Home' },
  { id: 4, name: 'Running Shoes', price: 79.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', category: 'Sports' },
  { id: 5, name: 'Backpack', price: 59.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500', category: 'Fashion' },
  { id: 6, name: 'Smartwatch', price: 199.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', category: 'Electronics' },
  { id: 7, name: 'Desk Lamp', price: 49.99, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500', category: 'Home' },
  { id: 8, name: 'Winter Jacket', price: 149.99, image: 'https://images.unsplash.com/photo-1545594861-3bbee6cf33a6?w=500', category: 'Fashion' },
  { id: 9, name: 'Blender', price: 69.99, image: 'https://images.unsplash.com/photo-1622623211364-5f4b76b814c7?w=500', category: 'Home' },
  { id: 10, name: 'Yoga Mat', price: 29.99, image: 'https://images.unsplash.com/photo-1599447292461-74c3695b53b0?w=500', category: 'Sports' },
  { id: 11, name: 'Wireless Speaker', price: 129.99, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500', category: 'Electronics' },
  { id: 12, name: 'Monitor', price: 249.99, image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=500', category: 'Electronics' }
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