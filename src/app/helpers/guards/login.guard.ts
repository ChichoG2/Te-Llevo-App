import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser") || "[]")
  
  if (loggedUser.nombre){
    return true;
  }
  router.navigate(["/login"])
  return false;
};
