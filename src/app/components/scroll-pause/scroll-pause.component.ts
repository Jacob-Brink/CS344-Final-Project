import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-pause',
  templateUrl: './scroll-pause.component.html',
  styleUrls: ['./scroll-pause.component.scss']
})
export class ScrollPauseComponent implements OnInit {

  @Input()
  extraScroll: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
