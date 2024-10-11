import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const usuarioGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);

  const loggedUser = auth.getUser();

  if(!loggedUser.esConductor){
    return true;
  }
  router.navigate(["/index-conductor"])
  return false;
};
