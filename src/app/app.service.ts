import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  getApp():string{
  	return "HELLO WORLD"
  }
}
