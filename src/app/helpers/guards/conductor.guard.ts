import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const conductorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AuthService);

  const loggedUser = auth.getUser();

  if (loggedUser.esConductor) {
    return true;
  }
  router.navigate(['/index'])
  return false;
};
