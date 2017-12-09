import { Injectable }       from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }  from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
    logedIn;
    redirectUrl;
    constructor(private router: Router) {}
    canActivate() {
        if(localStorage.getItem('token')){
            return true;
        }else{
            return false;
        }
    }
}
