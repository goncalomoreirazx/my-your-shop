import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();
  
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close.emit();
    }
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  onLogin() {
    console.log('Login attempt with:', { email: this.email, password: this.password, rememberMe: this.rememberMe });
    // In a real app, you would call your authentication service here
    alert('Login functionality would go here');
  }

  onClose() {
    this.close.emit();
  }
}