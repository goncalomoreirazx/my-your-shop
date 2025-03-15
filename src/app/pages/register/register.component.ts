// src/app/pages/register/register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  };

  passwordsMatch: boolean = true;

  checkPasswordsMatch() {
    this.passwordsMatch = this.user.password === this.user.confirmPassword;
    return this.passwordsMatch;
  }

  onRegister() {
    if (this.checkPasswordsMatch()) {
      console.log('Registration data:', this.user);
      // In a real app, you would call your user service here
      alert('Registration form submitted!');
    }
  }
}