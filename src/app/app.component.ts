import { Component } from '@angular/core';
import {AppService} from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent {
  title = 'service';
  constructor(private appservice:AppService){}
  ngOnInit(){
  	this.title=this.appservice.getApp();
  }
}
