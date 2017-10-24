import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignUpAuthService {
    response;
    serverDomain =  "http://localhost:8000";
    constructor(
        private http: HttpClient
    ) { 
    }

    registerUser(user){
        return this.http.post(this.serverDomain+'/signup',user);
    }

    // checkUsername(username){
    //     return this.http.get(this.serverDomain+'/signup/checkusername/'+ username);
    // }

    // checkEmail(email){
    //     return this.http.get(this.serverDomain+'/signup/checkemail/'+ email);
    // }
}
