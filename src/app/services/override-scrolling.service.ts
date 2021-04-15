import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverrideScrollingService {

  keys: { [key: number]: number } = {};
  wheelOpt: boolean | { [key: string]: boolean };
  wheelEvent: 'wheel' | 'mousewheel';

  //scrollChangeObserver: Observable<{ [key: string]: number }> =
  preventDefault(e: any): void {
    e.preventDefault();

    if (true) {
    } else {

    }

  }
  
  returnPreventDefault(that: any): (arg: any) => boolean | void {
    return (e: any): void | boolean => {
      if (that.keys[e.keyCode]) {
        that.preventDefault(e);
        return false;
      }
    }
  }

  // all code in this service is copied directly from the following link
  //https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
  constructor() { 
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    this.keys = {37: 1, 38: 1, 39: 1, 40: 1};

    
    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = true;
    // try {
    //   window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    //     get: function () { supportsPassive = true; } 
    // }));
    // } catch(e) {}

    this.wheelOpt = supportsPassive ? { passive: false } : false;
    this.wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  }

// call this to Disable
disableScroll() {
  window.addEventListener('DOMMouseScroll', this.preventDefault, false); // older FF
  window.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt); // modern desktop
  window.addEventListener('touchmove', this.preventDefault, this.wheelOpt); // mobile
  window.addEventListener('keydown', this.returnPreventDefault(this), false);
}

// call this to Enable
enableScroll() {
  window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
  window.removeEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt); 
  window.removeEventListener('touchmove', this.preventDefault, this.wheelOpt);
  window.removeEventListener('keydown', this.returnPreventDefault(this), false);
}


}
