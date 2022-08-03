import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AccountComponent } from './shared/account/account.component';
import { CanActivateChildGuard } from './shared/guards/can-activate-child.guard';
import { CanActiveGuard } from './shared/guards/can-active.guard';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';
import { CanLoadGuard } from './shared/guards/can-load.guard';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: "account", 
    component: AccountComponent,  
    canActivate: [CanActiveGuard],
    canDeactivate: [CanDeactiveGuard]
  },

  {
    path: "core", 
    loadChildren: () => import('./core/core.module').then((m)=> m.CoreModule),
    canLoad: [CanLoadGuard],
    canActivateChild: [CanActivateChildGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
