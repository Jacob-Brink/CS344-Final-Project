import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './screens/tutorial/tutorial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollObserverDirective } from './scroll-observer.directive';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './screens/about/about.component';
import { PlayComponent } from './screens/play/play.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';
import { ScrollSnapDirective } from './directives/scroll-snap.directive';
import { MinecraftSkinViewerComponent } from './components/minecraft-skin-viewer/minecraft-skin-viewer.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GalleryComponent } from './screens/gallery/gallery.component';
import { GalleryCollectionComponent } from './components/gallery-collection/gallery-collection.component';
import { GalleryViewerComponent } from './components/gallery-viewer/gallery-viewer.component';
import { GalleryThumbnailComponent } from './components/gallery-thumbnail/gallery-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    ScrollObserverDirective,
    AboutComponent,
    PlayComponent,
    DeveloperCardComponent,
    ScrollSnapDirective,
    MinecraftSkinViewerComponent,
    CustomCardComponent,
    GalleryComponent,
    GalleryCollectionComponent,
    GalleryViewerComponent,
    GalleryThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSliderModule,
    MatRadioModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
