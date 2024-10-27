import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { conductorGuard } from './helpers/guards/conductor.guard';
import { loginGuard } from './helpers/guards/login.guard';
import { usuarioGuard } from './helpers/guards/usuario.guard';

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
    canActivate:[loginGuard, usuarioGuard],
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
    canActivate:[loginGuard],
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'viaje',
    canActivate:[loginGuard, usuarioGuard],
    loadChildren: () => import('./pages/usuario/viaje/viaje.module').then( m => m.ViajePageModule)
  },
  {
    path: 'reestablecer-contrasena',
    loadChildren: () => import('./pages/reestablecer-contrasena/reestablecer-contrasena.module').then( m => m.ReestablecerContrasenaPageModule)
  },
  {
    path: 'planear-viaje',
    canActivate:[conductorGuard,loginGuard],
    loadChildren: () => import('./pages/conductor/planear-viaje/planear-viaje.module').then( m => m.PlanearViajePageModule)
  },
  {
    path: 'confirmar-viaje',
    canActivate:[conductorGuard,loginGuard],
    loadChildren: () => import('./pages/conductor/confirmar-viaje/confirmar-viaje.module').then( m => m.ConfirmarViajePageModule)
  },
  {
    path: 'viaje-vivo/:id',
    canActivate:[loginGuard],
    loadChildren: () => import('./pages/conductor/viaje-vivo/viaje-vivo.module').then( m => m.ViajeVivoPageModule)
  },
  {
    path: 'iniciar-viaje',
    canActivate:[conductorGuard,loginGuard],
    loadChildren: () => import('./pages/conductor/iniciar-viaje/iniciar-viaje.module').then( m => m.IniciarViajePageModule)
  },
  {
    path: 'index-conductor',
    canActivate:[conductorGuard,loginGuard],
    loadChildren: () => import('./pages/conductor/index-conductor/index-conductor.module').then( m => m.IndexConductorPageModule)
  },
  {
    path: 'listar-viaje',
    canActivate:[loginGuard, usuarioGuard],
    loadChildren: () => import('./pages/usuario/listar-viaje/listar-viaje.module').then( m => m.ListarViajePageModule)
  },
  {
    path: 'listar-viaje-conductor',
    canActivate:[conductorGuard,loginGuard],
    loadChildren: () => import('./pages/conductor/listar-viaje-conductor/listar-viaje-conductor.module').then( m => m.ListarViajeConductorPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/page404/page404.module').then( m => m.Page404PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
