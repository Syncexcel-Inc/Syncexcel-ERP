import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  public authToken;
  //private isAuthenticated = false; // Set this value dynamically

  
  
  constructor(private router: Router) {
    // if( this.isLoggednIn()) {
    //   this.isAuthenticated = true;
    // }
  }

  sendToken(token: string) {
    sessionStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    return sessionStorage.getItem("LoggedInUser")
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    sessionStorage.removeItem("LoggedInUser");
    this.router.navigate(["login"]);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggednIn()) {
      return true
    }
    this.router.navigate(['/sessions/login']);
    return false;
  }
}