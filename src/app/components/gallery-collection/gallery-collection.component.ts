import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-collection',
  templateUrl: './gallery-collection.component.html',
  styleUrls: ['./gallery-collection.component.scss']
})
export class GalleryCollectionComponent implements OnInit {

  @Input()
  imageLinks: Array<string> = [];

  @Output()
  selectedImage: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  start: number = 10;

  rowCount: number = 5;

  skinImages: Array<number> = new Array(this.rowCount);
  rows: Array<number> = new Array(2);

  constructor() { }

  ngOnInit(): void {
  }

  onSelection(id: number): void {
    this.selectedImage.emit(id);
  }

}
