import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldWithPathParam(name: string) {
    // let basicAuthHeaderString = this.createBasicAuthHttpHeader();
    // let header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/${name}`)
  }

  // createBasicAuthHttpHeader() {
  //   let username = 'user'
  //   let password = 'password'
  //   let basicAuthHeaderString = 'Basic '+ window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
