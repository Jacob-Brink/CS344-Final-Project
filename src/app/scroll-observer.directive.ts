import { Directive, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { OverrideScrollingService } from './services/override-scrolling.service';

@Directive({
  selector: '[appScrollObserver]',
  host: {'(window:scroll)': 'onScroll($event)'}
})
export class ScrollObserverDirective {

  @Input() percentageCenter: number = 0.25; // 1 means trigger event when any part of element is in view, 0.5 when you want 50% of the element to be centered
  @Input() tempDisableScrolling: number = 300; // indicates the amount of scrolling needed to unlock scrolling again once item is in view

  lastScrollPosition: number = 0;
  scrollY: number = 0;
  scrollEffort: number = 0;

  firstViewed: boolean = false;

  @Output() scrolledIntoView:EventEmitter<boolean> = new EventEmitter();
  elemRef: ElementRef;

  constructor(el: ElementRef, private scrolling: OverrideScrollingService) { 
    this.elemRef = el;
    this.scrolledIntoView.emit(false);
    this.scrolling = scrolling;
  }

  onScroll(e: Event) {
    console.log(window.scrollY);
    var scrolledIn = -1 * this.elemRef.nativeElement.getBoundingClientRect().top;
    let elemHeight = this.elemRef.nativeElement.offsetHeight;

    let upperBoundViewport = window.innerHeight * (0.5 - 0.5 * this.percentageCenter);
    let lowerBoundViewport = window.innerHeight * (0.5 + 0.5 * this.percentageCenter);

    if (scrolledIn+window.innerHeight*0.5 > upperBoundViewport && scrolledIn+window.innerHeight*0.5 < lowerBoundViewport) {
      
      this.scrolledIntoView.emit(true);
      
      if (!this.firstViewed) {
        this.lastScrollPosition = window.scrollY;
      }

      if (this.scrollEffort > 20000) {//this.tempDisableScrolling) {
        // unlock scrolling
      } else {
        // counteract scrolling
      }
      
    }
  }

}
