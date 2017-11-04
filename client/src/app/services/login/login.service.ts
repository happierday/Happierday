import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LoginService {
    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { }

    Login(user){
        return this.http.post(this.authService.serverDomain+'/login',user);
    }

    storeUser(token,username){
        this.authService.storeUser(token,username);
    }
}
