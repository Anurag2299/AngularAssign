import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-timestamp1',
  templateUrl: './timestamp1.component.html',
  styleUrls: ['./timestamp1.component.css']
})
export class Timestamp1Component implements OnInit {

  @Input() timevalue: string
  constructor() { }

  ngOnInit(): void {
  }

}
