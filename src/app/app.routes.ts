import { Routes } from '@angular/router';
import { HomeSubroutes } from './constants/home-subroutes.enum';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: HomeSubroutes.JackSkellington,
    },
    {
        path: ':theme',
        loadComponent: () =>
          import('./home/home.component').then((x) => x.HomeComponent),
    },
];
