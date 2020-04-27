import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      alert("you are already logged in. logout to login from different account")
      this.router.navigate(['welcome','user'])
      return false;
    }
    
    //this.router.navigate([''])
    return true;
  }
}
