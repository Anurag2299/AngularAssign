import { Component, OnInit } from '@angular/core';
import { CounterService} from '../counter.service';

@Component({
  selector: 'app-timestamp2',
  templateUrl: './timestamp2.component.html',
  styleUrls: ['./timestamp2.component.css']
})
export class Timestamp2Component implements OnInit {

  timestampListValue:string;
  constructor(private _counterService:CounterService) { 
    this._counterService.timestampListValue.subscribe(unum =>{
      this.timestampListValue = unum
    })
}
  ngOnInit(): void {
  }

}
