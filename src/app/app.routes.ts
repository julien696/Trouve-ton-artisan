import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtisanListComponent } from './pages/artisan-list/artisan-list.component';
import { ArtisanComponent } from './pages/artisan/artisan.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "artisan-list/:category", component: ArtisanListComponent},
    {path: "artisan/:id", component: ArtisanComponent},
    {path: "404", component: Error404Component},
    {path: "**", redirectTo: '/404'}
];
