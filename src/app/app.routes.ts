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
        children: [
          {
            path: '',
            loadComponent: () => import('./tabone/tabone.component').then((m) => m.TaboneComponent),
          },
          {
            path: 'one',
            loadComponent: () => import('./tabone/tabone.component').then((m) => m.TaboneComponent),
          },
          {
            path: 'two',
            loadComponent: () => import('./tabtwo/tabtwo.component').then((m) => m.TabtwoComponent),
          },
        ],
      },
      {
        path: 'overlaypage',
        loadComponent: () => import('./overlaypage/overlaypage.component').then((m) => m.OverlaypageComponent),
      },
      {
        path: 'overlaynextpage',
        loadComponent: () => import('./overlaynextpage/overlaynextpage.component').then((m) => m.OverlaynextpageComponent),
      },
      {
        path: 'thirdpage',
        loadComponent: () => import('./thirdpage/thirdpage.component').then((m) => m.ThirdpageComponent),
      }
    ]
  },
  {
    path: '',
    redirectTo: '/firstpage',
    pathMatch: 'full',
  },
];
