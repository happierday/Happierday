import { Injectable }       from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }  from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {
    logedIn;
    redirectUrl;
    constructor(private router: Router) {}
    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if(localStorage.getItem('token')){
            return true;
        }else{
            this.redirectUrl = state.url;
            this.router.navigate(['/login']);
            return false;
        }
    }
}
