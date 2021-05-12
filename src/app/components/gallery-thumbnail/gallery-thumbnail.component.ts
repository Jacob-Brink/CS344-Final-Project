import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageApiService } from 'src/app/services/image-api.service';

@Component({
  selector: 'app-gallery-thumbnail',
  templateUrl: './gallery-thumbnail.component.html',
  styleUrls: ['./gallery-thumbnail.component.scss']
})
export class GalleryThumbnailComponent implements OnInit {

  @Input() set id(value: number) {
    this._id = value;
    if (this.safeToLoadImage) {
      this.loadImage();
    }
  }

  @Input()
  imageURL: string = '';

  @Output()
  wasSelected: EventEmitter<number> = new EventEmitter<number>();

  imageAPI: ImageApiService;
  _id: number = 0;
  safeToLoadImage: boolean = false;

  async loadImage() {
    const imageFile = await this.imageAPI.getSkinPreview(this._id);
    this.imageURL = imageFile;
  }

  constructor(private imageAPIService: ImageApiService) {
    this.imageAPI = imageAPIService;
  }

  ngOnInit(): void {
    this.safeToLoadImage = true;
    this.loadImage();
  }

  onSelection(): void {
    this.wasSelected.emit(this._id);
  }

}
