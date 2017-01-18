import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },

];







