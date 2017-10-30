import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignUpService {
    serverDomain =  "https://happierday.herokuapp.com";
    constructor(
        private http: HttpClient
    ) { 
    }

    registerUser(user){
        return this.http.post(this.serverDomain+'/signup',user);
    }

    verifyUser(id){
        return this.http.get(this.serverDomain+'/verify/'+id);
    }

    storeUser(username,token){
        localStorage.setItem('username',username);
        localStorage.setItem('token',token);
    }
}
