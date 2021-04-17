import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showcase-screen-focus',
  templateUrl: './showcase-screen-focus.component.html',
  styleUrls: ['./showcase-screen-focus.component.scss']
})
export class ShowcaseScreenFocusComponent implements OnInit, AfterViewInit {

  @Input() title: string = "Unset title";
  @Input() paragraph: string = "Unset paragraph";

  @ViewChild('mainContainer', {static: false}) mainContainer: ElementRef | any;

  ngAfterViewInit() {
    setInterval(() => {
      this.safeToViewDOM = true;
      this.setHeight();
    }, 100)
  }

  safeToViewDOM: boolean = false;

  innerHeight: number = 0;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
    });
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
