import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-content-section',
  templateUrl: './screen-content-section.component.html',
  styleUrls: ['./screen-content-section.component.scss']
})
export class ScreenContentSectionComponent implements OnInit {

  @Input()
  title: string = "This title";

  constructor() { }

  ngOnInit(): void {
  }

}
