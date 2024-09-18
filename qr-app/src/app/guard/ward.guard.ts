import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const wardGuard: CanActivateFn = (route, state) => {
  const AuthSer = inject(AuthService);
  const router = inject(Router);

  return AuthSer.isLoggedIn().pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  );
};
