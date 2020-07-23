import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count1',
  templateUrl: './count1.component.html',
  styleUrls: ['./count1.component.css'],
})
export class Count1Component implements OnInit {
  startCount: number = 0;
  pauseCount: number = -1;

  @Input() startvalue: number
  @Input() pausevalue:number;
  constructor() {}
  ngOnInit(): void {}
}
