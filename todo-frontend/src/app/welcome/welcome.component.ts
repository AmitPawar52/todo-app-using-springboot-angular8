import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage = 'Welcome message'
  name = ''
  msgFromService: string;
  errorMsgFromService: string;

  constructor(private route:ActivatedRoute,
              private service: WelcomeDataService ) { }

  ngOnInit() {
    this.name =this.route.snapshot.params['name']
  }
  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParam() {
    this.service.executeHelloWorldWithPathParam(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessResponse(response) {
    this.msgFromService = response.message
  }
  handleErrorResponse(error){
    this.errorMsgFromService = error.error.message
  }

}
