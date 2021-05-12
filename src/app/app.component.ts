import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CS344-Final-Project';

  constructor(private router: Router) {
    router.events.subscribe((val) => {
  });
  }

}
