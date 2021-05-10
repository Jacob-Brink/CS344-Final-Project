import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-thumbnail',
  templateUrl: './gallery-thumbnail.component.html',
  styleUrls: ['./gallery-thumbnail.component.scss']
})
export class GalleryThumbnailComponent implements OnInit {

  @Input()
  id: number = 0;

  @Input()
  imageURL: string = '/assets/images/front-back-example.png';

  @Output()
  wasSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
