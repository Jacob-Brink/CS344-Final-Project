import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  skinImages: Array<number> = new Array(4);

  constructor() { }

  ngOnInit(): void {
  }

}
