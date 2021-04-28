import { Directive, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { OverrideScrollingService } from './services/override-scrolling.service';

@Directive({
  selector: '[appScrollObserver]',
  host: {'(window:scroll)': 'onScroll($event)'}
})
export class ScrollObserverDirective {

  @Input() percentageCenter: number = 0.25; // 1 means trigger event when any part of element is in view, 0.5 when you want 50% of the element to be centered

  lastScrollPosition: number = 0;
  scrollY: number = 0;
  scrollEffort: number = 0;

  firstViewed: boolean = false;

  @Output() updateScrollPosition: EventEmitter<number> = new EventEmitter();

  @Output() scrolledIntoView:EventEmitter<boolean> = new EventEmitter();
  elemRef: ElementRef;

  constructor(el: ElementRef, private scrolling: OverrideScrollingService) { 
    this.elemRef = el;
    this.scrolledIntoView.emit(false);
    this.scrolling = scrolling;
  }

  checkScrollPosition() {
    this.updateScrollPosition.emit(this.elemRef.nativeElement.getBoundingClientRect().top);
    
    var scrolledIn = (-1) * this.elemRef.nativeElement.getBoundingClientRect().top;

    let upperBoundViewport = window.innerHeight * (0.5 - 0.5 * this.percentageCenter);
    let lowerBoundViewport = window.innerHeight * (0.5 + 0.5 * this.percentageCenter);

    if (scrolledIn+window.innerHeight*0.5 > upperBoundViewport && scrolledIn+window.innerHeight*0.5 < lowerBoundViewport) {
      this.scrolledIntoView.emit(true);
      
      if (!this.firstViewed) {
        this.lastScrollPosition = window.scrollY;
      }
      
    } else if (scrolledIn+window.innerHeight * 0.5 > window.innerHeight || scrolledIn < window.innerHeight * -.5) {
      this.scrolledIntoView.emit(false);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.checkScrollPosition();
    }, 300); // If I don't do this hack, then getBoundingClientRect() thinks everything is at top of viewport, which breaks the trigger
  }

  onScroll(e: Event) {
    this.checkScrollPosition();
  }

}
