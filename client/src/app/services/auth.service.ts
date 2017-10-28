import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
    header;
    username = localStorage.getItem('username');
    serverDomain = "http://localhost:8000"
    constructor(
        private http: HttpClient,
    ) { }
    authUser(){
        this.header = new HttpHeaders({
            'authtoken': localStorage.getItem('token')
        });
    }
    
    getProfile(){
        this.authUser();
        return this.http.get(this.serverDomain + "/profile/"+ localStorage.getItem('username'),{headers:this.header});
    }

    loggedIn(){
        return tokenNotExpired();
    }

    logOut(){
        localStorage.clear();
    }
}
