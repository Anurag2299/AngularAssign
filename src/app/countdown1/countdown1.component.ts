import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown1',
  templateUrl: './countdown1.component.html',
  styleUrls: ['./countdown1.component.css'],
})
export class Countdown1Component implements OnInit {
  @Input() count: number;
  constructor() {}

  ngOnInit(): void {
  }
}
