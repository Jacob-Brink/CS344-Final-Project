import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { ModeCollapseShowcaseComponent } from './components/mode-collapse-showcase/mode-collapse-showcase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollObserverDirective } from './scroll-observer.directive';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    ModeCollapseShowcaseComponent,
    ScrollObserverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
