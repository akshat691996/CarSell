import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import {Sport} from './sport';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpsortService {
  
  constructor(private httpClient: HttpClient) { }
  
  getdata(url) {
  return this.httpClient.get(url);
}
}



