import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit, AfterViewInit {

  @ViewChild(MatAccordion) accordion: MatAccordion | any = null;

  cats: Array<number> = Array(20);

  constructor() { }

  ngAfterViewInit() {
    this.accordion.closeAll();
  }

  ngOnInit(): void {
    this.accordion.closeAll();
  }

}
