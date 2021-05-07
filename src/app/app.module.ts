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
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';
import { IntroductionComponent } from './components/screens/introduction/introduction.component';
import { DifficultiesComponent } from './components/screens/difficulties/difficulties.component';
import { ScrollSnapDirective } from './directives/scroll-snap.directive';
//import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { MinecraftSkinViewerComponent } from './components/minecraft-skin-viewer/minecraft-skin-viewer.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    ModeCollapseShowcaseComponent,
    ScrollObserverDirective,
    ScrollFocusComponent,
    ShowcaseScreenFocusComponent,
    AboutComponent,
    PlayComponent,
    DeveloperCardComponent,
    IntroductionComponent,
    DifficultiesComponent,
    ScrollSnapDirective,
    MinecraftSkinViewerComponent,
    CustomCardComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
