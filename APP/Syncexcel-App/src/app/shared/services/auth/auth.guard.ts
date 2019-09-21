import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  public authToken;

  constructor(private router: Router) {
  }

  sendToken(token: string) {
    sessionStorage.setItem('session', token);
  }

  getToken() {
    return sessionStorage.getItem('session');
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('LoggedInUser');
    sessionStorage.removeItem('appsession');
    this.router.navigate(['login']);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggednIn()) {
      return true
    }
    this.router.navigate(['/sessions/login']);
    return false;
  }
}