import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(c => c.Dashboard)
  },
  {
    path: 'clienti',
    loadComponent: () => import('./clienti/clienti').then(c => c.Clienti)
  },
  {
    path: 'veicoli',
    loadComponent: () => import('./veicoli/veicoli').then(c => c.Veicoli)
  },
  {
    path: 'ordini',
    loadComponent: () => import('./ordini-lavoro/ordini-lavoro').then(c => c.OrdiniLavoro)
  }
];
