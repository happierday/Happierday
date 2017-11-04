import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class SignUpService {
    url;
    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { 
    }

    registerUser(user){
        return this.http.post(this.authService.serverDomain+'/signup',user);
    }

    verifyUser(id){
        this.url = this.authService.serverDomain + '/verify/' + id;
        return this.http.get(this.url);
    }

    storeUser(token,username){
        this.authService.storeUser(token,username);
    }
}
