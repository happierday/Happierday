import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class NewPostService {

    constructor(
        private http: HttpClient,
        private authService:  AuthService
    ) { }

    newPost(form){
        this.authService.authUser();
        return this.http.post(this.authService.serverDomain + '/newpost',form,{headers: this.authService.header});
    }

}
