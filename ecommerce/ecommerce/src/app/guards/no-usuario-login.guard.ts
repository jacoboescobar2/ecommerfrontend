import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoUsuarioLoginGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (localStorage.getItem('usuario') === null || localStorage.getItem('usuario') === undefined 
    || localStorage.getItem('usuario') === '' || localStorage.getItem('usuario') === 'null') {
      return false;
    } else {
      this.router.navigate(['/home']);
      return true;
    }
  }
}
