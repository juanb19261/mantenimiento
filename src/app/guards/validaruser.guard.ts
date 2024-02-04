import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const validaruserGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  let idUser = sessionStorage.getItem('id');

  if (idUser == null) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
