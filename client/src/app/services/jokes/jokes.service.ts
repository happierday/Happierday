import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JokesService {

    constructor(
        private authService: AuthService,
        private http: HttpClient
    ) { }

    getJokes(){
        return this.http.get(this.authService.serverDomain + '/home');
    }

    getJokeDetail(title){
        if(this.authService.loggedIn()){
            this.authService.authUser();
            return this.http.get(this.authService.serverDomain + '/jokes/' + title, {headers: this.authService.header});
        }else{
            return this.http.get(this.authService.serverDomain + '/jokes/' + title);
        }   
    }
}
