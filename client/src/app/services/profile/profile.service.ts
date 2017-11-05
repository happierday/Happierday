import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class ProfileService {

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) { }

    getProfile(username){
        if(this.authService.loggedIn()){
            this.authService.authUser();
            return this.http.get(this.authService.serverDomain + '/profile/'+ username, {headers:this.authService.header});
        }else{
            return this.http.get(this.authService.serverDomain + '/profile/'+ username);
        }
    }

}
