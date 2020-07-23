import { Component, OnInit } from '@angular/core';
import { CounterService} from '../counter.service';
@Component({
  selector: 'app-countdown2',
  templateUrl: './countdown2.component.html',
  styleUrls: ['./countdown2.component.css']
})
export class Countdown2Component implements OnInit {

  counterValue:number;
  constructor(private _counterService:CounterService) { 
    this._counterService.counterValue.subscribe(unum =>{
      this.counterValue = unum
    })
  }
  

  ngOnInit(): void {
  }

}
