import { Component, OnInit } from '@angular/core';
import { CounterService} from '../counter.service';

@Component({
  selector: 'app-count2',
  templateUrl: './count2.component.html',
  styleUrls: ['./count2.component.css']
})
export class Count2Component implements OnInit {

  pauseCounterValue:number;
  startCounterValue:number;
  constructor(private _counterService:CounterService) { 
    this._counterService.pauseCounterValue.subscribe(unum =>{
      this.pauseCounterValue = unum
    })
    this._counterService.startCounterValue.subscribe(unum =>{
      this.startCounterValue = unum
    })
}

  ngOnInit(): void {
  }

}
