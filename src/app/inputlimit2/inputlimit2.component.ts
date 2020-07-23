import { Component, OnInit } from '@angular/core';
import { CounterService} from '../counter.service';

@Component({
  selector: 'app-inputlimit2',
  templateUrl: './inputlimit2.component.html',
  styleUrls: ['./inputlimit2.component.css']
})
export class Inputlimit2Component implements OnInit {

  inputVariable: boolean = false;
  startvalue: boolean = false;
  public counter: number = 0;
  public start:number =0;
  public pause:number=0;
  public time:number=0;
  public pausedat=Array();

  arr=Array();
  num:number;
  timer = false;
 

  counterValue:number;
  pauseCounterValue:number;
  startCounterValue:number;
  timestampListValue:any;

    constructor(private _counterService:CounterService) { 
    this._counterService.counterValue.subscribe(unum =>{
      this.counterValue = unum
    })
  }
  runInterval(){
    if(this.timer){
      //pause
      this.timer = false;
    }else{
      //start
      this.timer = true;
    }
    let interval = setInterval(()=>{
      if(this.timer && this.num>0){
      this.startCounter()
      }else{
        clearInterval(interval);
      }
    },1000);
  }
  startCounter() {
    if(this.num > 0){
      this.num = this.num -1;
      this._counterService.counterValue.next(this.num)
    }
  }
  localArray(){
    this.pausedat.push(this.num)
  }


  ngOnInit(): void {
    this.start=0;
    this.pause=0;
  }

  startvalueincrement(){
    this.start +=1
    this._counterService.startCounterValue.next(this.start)
  }

  pausevalueincrement(){
    this.pause +=1
    this._counterService.pauseCounterValue.next(this.pause)
  }
  tempfunct() {
    // e.preventDefault();
    this.inputVariable = !this.inputVariable;
    this.startvalue = !this.startvalue;
    if(this.startvalue){
      this.startvalueincrement();
    }
    else{
      this.pausevalueincrement()
    }
    this.time = Date.now();
    this.arr.push(this.time);
    this._counterService.timestampListValue.next(this.arr)
    // console.log(this.arr);
    this.runInterval()
    if(!this.startvalue)
    {
      this.localArray();
    }
    
  }

  updateUnum(unum){
    this._counterService.counterValue.next(unum.value)
    this.num = unum.value;
    this.tempfunct()
  }
  
}

