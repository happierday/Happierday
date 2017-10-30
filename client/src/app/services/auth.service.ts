import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
    header;
    username;
    serverDomain = "https://happierday.herokuapp.com/"
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
        if(tokenNotExpired()){
            this.username = localStorage.getItem('username');
            return true;
        }else{
            return false;
        }
    }

    logOut(){
        localStorage.clear();
    }
}
