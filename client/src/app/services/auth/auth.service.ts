import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
    header;
    username;
    serverDomain = "https://happierday.herokuapp.com";
    constructor(
        private http: HttpClient,
    ) { 
    }
    authUser(){
        this.header = new HttpHeaders({
            'content-Type': 'application/json',
            'authtoken': localStorage.getItem('token')
        });
    }
    
    storeUser(token,username){
        localStorage.setItem('token',token);
        localStorage.setItem('username',username);
    }

    loggedIn(){
        if(tokenNotExpired()){
            this.username = localStorage.getItem('username');
            return true;
        }else{
            localStorage.clear();
            this.username = undefined;
            return false;
        }
    }

    logOut(){
        this.username = undefined;
        localStorage.clear();
    }

}
