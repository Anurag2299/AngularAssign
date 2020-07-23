import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scrolling',
  templateUrl: './infinite-scrolling.component.html',
  styleUrls: ['./infinite-scrolling.component.css']
})
export class InfiniteScrollingComponent implements OnInit {

  arr=Array(4)

  constructor() {}

  clickButton(i:number) {
    alert(`Button in ${i}th div is clicked`);
  }

  onScroll(){
    this.arr.push(this.arr.length)
  }

  ngOnInit() {
    this.arr.push(this.arr.length)
  }
}
