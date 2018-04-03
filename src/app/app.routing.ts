import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { NavComponent } from './nav/nav.component';
import { DisplaySubComponent } from './display-sub/display-sub.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ViewComponent
  },
  {
    path: 'r/:subreddit',
    component: DisplaySubComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
