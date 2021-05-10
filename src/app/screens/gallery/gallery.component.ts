import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  skinImages: Array<string> = new Array(20);

  currentID: number = 0;

  constructor() {
    this.skinImages[0] = '/assets/images/skin.png';
    this.skinImages[1] = '/assets/images/skin2.png';
    for (let i = 0; i < 20; i++) {
      this.skinImages[i] = '/assets/images/skin.png';
    }
  }

  ngOnInit(): void {
  }

  onSelection(id: number) {
    this.currentID = id;
  }

  onChangePage(e: number) {
  }

}
