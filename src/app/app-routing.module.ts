import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//guards
import { VerificarAuthGuard } from './guards/verificar-auth.guard';
import { VerificarHomeGuard } from './guards/verificar-home.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [VerificarAuthGuard],
    canLoad: [VerificarAuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [VerificarHomeGuard],
    canLoad: [VerificarHomeGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
