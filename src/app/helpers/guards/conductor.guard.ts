import { CanActivateFn, Router } from '@angular/router';

export const conductorGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser")||"[]");

  if(loggedUser.esConductor){
    return true;
  }
  router.navigate(['/index'])
  return false;
};
