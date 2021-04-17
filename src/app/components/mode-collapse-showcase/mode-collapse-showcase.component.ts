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
      transition('t-hidden <=> t-visible', [
        animate('1s')
      ]),
      transition('* <=> *', [
        animate('1s')
      ]),
    ]),
    trigger('cat-spam', [
      state('hidden', style({
        opacity: 0.0,
      })),
      state('visible', style({
        opacity: 1.0,
      })),
      transition('* <=> *', [
        animate('2s')
      ]),
    ])
  ],
  templateUrl: './mode-collapse-showcase.component.html',
  styleUrls: ['./mode-collapse-showcase.component.scss']
})
export class ModeCollapseShowcaseComponent implements OnInit {

  ROWS: number = 1;
  COLS: number = 1;

  matrix: Array<Array<boolean>> = []
  hasBeenViewed: boolean = false;
  scrollEffort: number = 50;
  scrolledIn: number = 0;
  currentStep: number = 0;
  animationSteps: Array<number> = new Array(4)
  lastCurrentStep: number = 0;

  constructor() {
    for (let i = 0; i < this.ROWS; i++) {
      let newRow: Array<boolean> = [];
      for (let j = 0; j < this.COLS; j++) {
        newRow.push(false);
      }
      this.matrix.push(newRow);      
    }
  }

  ngOnInit(): void {  
  }

  inView(e: boolean): void {
    this.hasBeenViewed = e;
  }

  calculateAnimationStep(): void {
    this.currentStep = Math.floor(this.scrolledIn / window.innerHeight * this.animationSteps.length);
    if (this.currentStep > 4) {
      for (let i = 0; i < this.matrix.length; i++) {
        for (let j = 0; j < this.matrix[i].length; j++) {
          this.matrix[i][j] = true;
        }
      }
    } else if (this.lastCurrentStep != this.currentStep) {
      for (let i = 0; i < this.matrix.length; i++) {
        for (let j = 0; j < this.matrix[i].length; j++) {
          this.matrix[i][j] = Math.random() > (1/this.currentStep);
        }
      }
      let randomNumber = 2;
    }

    this.lastCurrentStep = this.currentStep;    
  }

  onResize(e: Event): void {
    this.calculateAnimationStep();
  }

  scrolled(n: number): void {
    this.scrolledIn = n;
    this.calculateAnimationStep();
  }

}
