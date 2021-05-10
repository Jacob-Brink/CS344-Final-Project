import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CS344-Final-Project';

  skinImages: Array<number> = new Array(4);

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      console.log(this.router.url)
  });
  }
}
