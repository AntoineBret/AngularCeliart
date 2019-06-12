import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '@app/modules/home/pages/home.component';
import {NoAuthGuard} from '@app/core/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
