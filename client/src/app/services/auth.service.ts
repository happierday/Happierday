import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class AuthService {
    header;
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
        return this.http.get(this.serverDomain + "/profile",{headers:this.header});
    }

    logOut(){
        localStorage.clear();
    }
}
