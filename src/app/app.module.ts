import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { ModeCollapseShowcaseComponent } from './components/mode-collapse-showcase/mode-collapse-showcase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollObserverDirective } from './scroll-observer.directive';
import { ScrollFocusComponent } from './components/scroll-focus/scroll-focus.component';
import { ShowcaseScreenFocusComponent } from './components/showcase-screen-focus/showcase-screen-focus.component';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './pages/about/about.component';
import { PlayComponent } from './pages/play/play.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    ModeCollapseShowcaseComponent,
    ScrollObserverDirective,
    ScrollFocusComponent,
    ShowcaseScreenFocusComponent,
    AboutComponent,
    PlayComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
