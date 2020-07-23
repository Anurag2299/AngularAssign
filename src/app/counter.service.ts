import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  counterValue = new Subject<any>();
  startCounterValue = new Subject<any>();
  pauseCounterValue= new Subject<any>();
  timestampListValue = new Subject<any>();

}
