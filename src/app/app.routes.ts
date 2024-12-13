import { inject, REQUEST } from '@angular/core';
import { CanActivateFn, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const canActivate: CanActivateFn = () => {
  console.log('CanActivateFn called', inject(REQUEST) != null);
  return true;
};

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [canActivate]
  }
];
