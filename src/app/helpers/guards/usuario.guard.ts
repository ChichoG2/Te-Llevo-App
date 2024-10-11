import { CanActivateFn, Router } from '@angular/router';

export const usuarioGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser")||"[]");

  if(!loggedUser.esConductor){
    return true;
  }
  router.navigate(["/index-conductor"])
  return false;
};
