import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignUpService {
    serverDomain =  "http://localhost:8000";
    constructor(
        private http: HttpClient
    ) { 
    }

    registerUser(user){
        return this.http.post(this.serverDomain+'/signup',user);
    }

    storeUser(token,username){
        localStorage.setItem('token',token);
        localStorage.setItem('username',username);
    }
}
