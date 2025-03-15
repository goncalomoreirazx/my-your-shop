import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, LoginModalComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'My Your Shop';
  showLoginModal = false;

  toggleLoginModal(){
    this.showLoginModal = !this.showLoginModal;
  }

  closeLoginModal(){
    this.showLoginModal = false;
  }
}