import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'node:assert';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {

  private serverAddress: string = "http://localhost:3000"

  private http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  // https://stackoverflow.com/questions/45530752/getting-image-from-api-in-angular-4-5
  async createImageFromBlob(image: Blob): Promise<any> {
    
    let reader = new FileReader();

    let promise = new Promise<any>((res, rej) => {
      console.log("Loading Image");
      reader.addEventListener("load", () => {
        res(reader.result);
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      } else {
        rej("Image blob is null!");
      }

    });

    return promise;
  }

  async getImageFromServer(id: number, type: string): Promise<any> {
    let blobImage = await this.http.get(`${this.serverAddress}/image/${id}/${type}`, { responseType: 'blob' }).toPromise() as Blob;
    return await this.createImageFromBlob(blobImage);
  }

  async getSkinPreview(id: number): Promise<any> {
    console.log("Getting skin preview")
    return await this.getImageFromServer(id, 'preview');
  }

  async getSkinTexture(id: number): Promise<any> {
    return await this.getImageFromServer(id, 'texture');
  }

}
