import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    username;
    email;
    result;
    authStatus;
    constructor(
        private profileService: ProfileService,
        private router: Router
    ) { }
    
    ngOnInit() {
        location.reload();
        this.profileService.getProfile(this.router.url.split('/')[2]).subscribe(res => {
            this.result = JSON.parse(JSON.stringify(res));
            this.authStatus = this.result.auth;
            this.email = this.result.email;
            this.username = this.result.username;
        }) 
    }
}
