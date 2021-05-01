import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollSnap]',
})
export class ScrollSnapDirective {

  children: any;
  safe: boolean = false;
  timer: any | null = null;


  constructor(private el: ElementRef) {
    this.children = el.nativeElement.childNodes;
  }

  private getCenter(el: any): number {
    // console.log(el.getBoundingClientRect().height / 2 + el.getBoundingClientRect().top)
    console.log((window.scrollY + window.innerHeight / 2) - (el.getBoundingClientRect().height / 2 + el.getBoundingClientRect().top))
    // console.log(window.scrollY + window.innerHeight / 2 - (el.getBoundingClientRect().height / 2 + el.getBoundingClientRect().top))
    return (window.scrollY + window.innerHeight / 2) - (el.getBoundingClientRect().height / 2 + el.getBoundingClientRect().top + window.scrollY);
    //console.log(window.scrollY)
    // return window.scrollY - el.getBoundingClientRect().top;
  }

  checkScroll() {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      if (true) {
        let closestElem: any | null = null;
        for (let i = 0; i < this.children.length; i++) {
          let curr = this.children.item(i);
          if (closestElem === null) {
            closestElem = curr;
          } else {
            if (Math.abs(this.getCenter(closestElem)) > Math.abs(this.getCenter(curr))) {
              closestElem = curr;
            }
          }
        }

        closestElem.scrollIntoView({ block: 'center', behavior: 'smooth' });
        
      }

    }, 500);
    
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    this.checkScroll();
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.checkScroll();
  }

}
