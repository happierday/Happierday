import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
    header;
    username;
    //deployment
    serverDomain =  "https://happierday.herokuapp.com";
    // // development
    //serverDomain =  "http://localhost:8000";
    constructor(
        private http: HttpClient,
    ) { }
    authUser(){
        this.header = new HttpHeaders({
            authtoken: localStorage.getItem('token')
        });
    }
    
    storeUser(token,username){
        localStorage.setItem('username',username);
        localStorage.setItem('token',token);
    }

    loggedIn(){
        if(tokenNotExpired()){
            this.username = localStorage.getItem('username');
            return true;
        }else{
            this.username = undefined;
            return false;
        }
    }

    logOut(){
        this.username = undefined;
        localStorage.clear();
    }

}
