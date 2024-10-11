import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);

  const loggedUser = auth.getUser();
  
  if (loggedUser.nombre){
    return true;
  }
  router.navigate(["/login"])
  return false;
};
