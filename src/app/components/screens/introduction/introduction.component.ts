import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  
  @ViewChild('mainContainer', {static: false}) mainContainer: ElementRef | any;

  isFocused: boolean = false;

  ngAfterViewInit() {
    setInterval(() => {
      this.safeToViewDOM = true;
      this.setHeight();
    }, 100)
  }

  safeToViewDOM: boolean = false;

  innerHeight: number = 0;

  constructor() {
  }

  inView(inside: boolean) {
    if (inside) {
      this.isFocused = true;
    }
  }

  ngOnInit(): void {
  }

  setHeight(): void {
    this.innerHeight = this.mainContainer.nativeElement.getBoundingClientRect().height / window.innerHeight * 100;
    // set this.innerHeight to current height of mainContainer in vh units (this is because to get the sticky element positioned right along with the right extra scrolling)
    // yes we could just set the sticky element to 100vh and then center the div or whatever, however that would create extra whitespace when scrolling
    // it's hacky, but it works okay
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e: Event) {
    if (this.safeToViewDOM) {
      this.setHeight();
    }    
  }

}
