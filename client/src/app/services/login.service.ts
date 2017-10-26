import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {
    serverDomain = "http://localhost:8000";
    constructor(
        private http: HttpClient
    ) { }

    Login(user){
        return this.http.post(this.serverDomain+'/login',user);
    }

    storeUser(token){
        localStorage.setItem('token',token);
    }
}
