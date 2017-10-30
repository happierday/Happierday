import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {
    serverDomain = "https://happierday.herokuapp.com";
    constructor(
        private http: HttpClient
    ) { }

    Login(user){
        return this.http.post(this.serverDomain+'/login',user);
    }

    storeUser(token,username){
        localStorage.setItem('token',token);
        localStorage.setItem('username',username);
    }
}
