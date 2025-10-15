import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ResumeComponent } from './resume/resume';
import { AboutComponent } from './about/about';
import { ProjectsComponent } from './projects/projects';
import { NotFoundComponent } from './error/error';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];