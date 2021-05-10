import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

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

  @Output()
  pageChangeEvent: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  start: number = 0;

  
  
  constructor() {}

  ngOnInit(): void {
  }

  onSelection(id: number): void {
    this.selectedImage.emit(id);
  }

  onPageChange(e: PageEvent) {
    this.pageChangeEvent.emit(e.pageIndex);
  }

}
