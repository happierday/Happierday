import { Injectable } from '@angular/core';
import { CanActivate, Router }  from '@angular/router';

@Injectable()
export class NonauthService {
    constructor(private router: Router) {}
    canActivate() {
        if(localStorage.getItem('token')){
            this.router.navigate(['/']);
            return false;
        }else{
            return true;
        }
    }
}
