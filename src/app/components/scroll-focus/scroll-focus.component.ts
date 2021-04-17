import { Component, ElementRef, Input, OnInit, Output, EventEmitter, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-scroll-focus',
  templateUrl: './scroll-focus.component.html',
  styleUrls: ['./scroll-focus.component.scss']
})
export class ScrollFocusComponent implements OnInit, AfterViewInit {

  @Input() extraScrolling: number = 400;
  @Input() innerHeight: number = 800;

  @Output() scrolledIn: EventEmitter<number> = new EventEmitter();

  @ViewChild('outerElem') outerElem: ElementRef | any;
  @ViewChild('innerElem') innerElem: ElementRef | any;

  ngAfterViewInit() {
    this.safeToViewDOM = true;
  }

  safeToViewDOM: boolean = false;
  elemRef: ElementRef;
  innerPosition: number = 0;
  outerPosition: number = 0;

  constructor(private el: ElementRef) { 
    this.elemRef = el;
    this.outerElem = null;
    this.innerElem = null;
  }

  testScroll(s: number) {
    console.log(`appScrollObserver ${s}`)
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e: Event) {
    if (this.safeToViewDOM) {
      let innerTop = this.innerElem.nativeElement.getBoundingClientRect().top;
      let outerTop = this.outerElem.nativeElement.getBoundingClientRect().top;
      this.scrolledIn.emit(innerTop - outerTop);
    }    
  }

  ngOnInit(): void {
  }

}
