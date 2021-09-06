import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

//Pages
import { AreonavesComponent } from './pages/areonaves/areonaves.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


//Guards
import { AuthRolGuard } from './guards/auth-rol.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthRolGuard]
      },
      {
        path: 'areonaves',
        component: AreonavesComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
