import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ImageApiService } from 'src/app/services/image-api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  skinImages: Array<string> = new Array(20);

  currentID: number = 0;
  isOpen: boolean = false;

  imageAPI: ImageApiService;
  currentImage: string = 'http://localhost:3000/image/201/texture';

  constructor(private ImageAPI: ImageApiService) {
    this.imageAPI = ImageAPI;
  }

  ngOnInit(): void {
  }

  onSelection(id: number) {
    this.currentID = id;
    console.log("Selected an image!")
    this.currentImage = `http://localhost:3000/image/${id}/texture`;
    this.isOpen = true;
  }

  onCloseEvent(): void {
    this.isOpen = false;
  }

  onChangePage(e: number) {
  }

}
