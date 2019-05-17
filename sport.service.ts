import { Injectable } from '@angular/core';
import {observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private sportStatusObs=new Subject<boolean>()
  private sportStatusObs$=this.sportStatusObs.asObservable();
  sportstatus:boolean=false;


  constructor() { }
  cricket(){
    this.sportstatus=true;
    this.sportStatusObs.next(this.sportstatus)
  }
}
