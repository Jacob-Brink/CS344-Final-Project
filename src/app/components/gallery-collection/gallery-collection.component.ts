import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-collection',
  templateUrl: './gallery-collection.component.html',
  styleUrls: ['./gallery-collection.component.scss']
})
export class GalleryCollectionComponent implements OnInit {

  skinImages: Array<number> = new Array(5);

  constructor() { }

  ngOnInit(): void {
  }

}
