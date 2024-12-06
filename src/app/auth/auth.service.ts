import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  constructor() { }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  login(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.isLoggedIn = true;
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }
}
