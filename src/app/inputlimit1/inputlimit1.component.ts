import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputlimit1',
  templateUrl: './inputlimit1.component.html',
  styleUrls: ['./inputlimit1.component.css'],
})
export class Inputlimit1Component implements OnInit {

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
  
  
  constructor() {}
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
  }

  pausevalueincrement(){
    this.pause +=1
  }
  tempfunct(e) {
    e.preventDefault();
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
    this.runInterval()
    if(!this.startvalue)
    {
      this.localArray();
    }
    
  }

  
}
