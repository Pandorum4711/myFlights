import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';

export const APP_ROUTES: Routes = [
    {
    // Standardroute: Umleitung auf '/home'
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    },
    {
    path: 'home',
    component: HomeComponent
    },
    {
    path: 'about',
    component: AboutComponent
    },
    {
    path: 'flight-search',
    component: FlightSearchComponent
    },
    {
    path: '**',
    component: NotFoundComponent
    }
];