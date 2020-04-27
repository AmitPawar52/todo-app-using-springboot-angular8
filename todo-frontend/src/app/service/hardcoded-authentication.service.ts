import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username === 'user' && password === 'pass') {
      sessionStorage.setItem('authenticatedUser', username)
      return true
    } else {
      return false
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }
  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

}
