import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-content-text',
  templateUrl: './screen-content-text.component.html',
  styleUrls: ['./screen-content-text.component.scss']
})
export class ScreenContentTextComponent implements OnInit {

  @Input()
  title: string = "no title";

  constructor() { }

  ngOnInit(): void {
  }

}
