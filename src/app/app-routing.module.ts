import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './screens/about/about.component';
import { PlayComponent } from './screens/play/play.component';
import { TutorialComponent } from './screens/tutorial/tutorial.component';
//import { ShowcaseComponent } from './pages/showcase/showcase.component';

const routes: Routes = [
  { path: 'learn', component: TutorialComponent },
  { path: 'play', component: PlayComponent },
  { path: 'about', component: AboutComponent },
  //{ path: 'show', component: ShowcaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
