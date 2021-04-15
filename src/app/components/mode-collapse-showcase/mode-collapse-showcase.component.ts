import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-mode-collapse-showcase',
  animations: [
    trigger('pop-in', [
      state('t-hidden', style({
        opacity: 0.0,
      })),
      state('t-visible', style({
        opacity: 1,
      })),
      state('p-hidden', style({
        opacity: 0.0,
      })),
      state('p-visible', style({
        opacity: 1,
      })),
      transition('t-hidden => t-visible', [
        animate('1s')
      ]),
      transition('t-visible => t-hidden', [
        animate('1s')
      ]),
      transition('p-hidden => p-visible', [
        animate('0.5s 1s')
      ]),
      transition('p-visible => p-hidden', [
        animate('0.5s 1s')
      ])
    ]),
  ],
  templateUrl: './mode-collapse-showcase.component.html',
  styleUrls: ['./mode-collapse-showcase.component.scss']
})
export class ModeCollapseShowcaseComponent implements OnInit {

  cats: Array<number> = new Array(12)
  hasBeenViewed: boolean = false;
  scrollEffort: number = 50;
  scrolledIn: number = 0;

  constructor() { }

  ngOnInit(): void {  
  }

  inView(e: boolean): void {
    this.hasBeenViewed = e;
  }

  scrolledDistance(n: number): void {
    if (this.hasBeenViewed && this.scrolledIn < 200) {
      this.scrolledIn += n;
    }
  }

}
