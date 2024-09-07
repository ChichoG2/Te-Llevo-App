import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { conductorGuard } from './helpers/guards/conductor.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/usuario/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/usuario/viaje/viaje.module').then( m => m.ViajePageModule)
  },
  {
    path: 'reestablecer-contrasena',
    loadChildren: () => import('./pages/reestablecer-contrasena/reestablecer-contrasena.module').then( m => m.ReestablecerContrasenaPageModule)
  },
  {
    path: 'planear-viaje',
    canActivate:[conductorGuard],
    loadChildren: () => import('./pages/conductor/planear-viaje/planear-viaje.module').then( m => m.PlanearViajePageModule)
  },
  {
    path: 'confirmar-viaje',
    canActivate:[conductorGuard],
    loadChildren: () => import('./pages/conductor/confirmar-viaje/confirmar-viaje.module').then( m => m.ConfirmarViajePageModule)
  },  {
    path: 'viaje-vivo',
    loadChildren: () => import('./pages/conductor/viaje-vivo/viaje-vivo.module').then( m => m.ViajeVivoPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
