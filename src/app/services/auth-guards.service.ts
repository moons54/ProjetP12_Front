import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthentificationService} from './authentification.service';
import {Injectable} from '@angular/core';


@Injectable()
export class AuthGuardsService implements CanActivate{

  constructor( private authService: AuthentificationService,
               private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
              Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuth) {
      return true;
    } else {
      this.route.navigate(['login']);
    }
  }
}

