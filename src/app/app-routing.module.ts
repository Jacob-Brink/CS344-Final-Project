import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PlayComponent } from './pages/play/play.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

const routes: Routes = [
  { path: 'learn', component: TutorialComponent },
  { path: 'play', component: PlayComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
