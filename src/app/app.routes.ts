import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'firstpage',
        loadComponent: () => import('./firstpage/firstpage.component').then((m) => m.FirstpageComponent),
      },
      {
        path: 'secondpage',
        loadComponent: () => import('./secondpage/secondpage.component').then((m) => m.SecondpageComponent),
      },
      {
        path: 'overlaypage',
        loadComponent: () => import('./overlaypage/overlaypage.component').then((m) => m.OverlaypageComponent),
      },
      {
        path: 'overlaynextpage',
        loadComponent: () => import('./overlaynextpage/overlaynextpage.component').then((m) => m.OverlaynextpageComponent),
      }
    ]
  },
  {
    path: '',
    redirectTo: '/firstpage',
    pathMatch: 'full',
  },
];
