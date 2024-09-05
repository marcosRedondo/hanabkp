import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/connection',
        pathMatch: 'full'
    },
    {
        path: 'connection',
        loadComponent: ()=> import ('@pages/connection/connection.component').then(c => c.ConnectionComponent)
    },
];
