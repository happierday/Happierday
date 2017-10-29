import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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
    status;
    message;
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }
    
    ngOnInit() {
        if(!localStorage.getItem('token')){
            this.router.navigate(['/']);
        }else{
            this.authService.getProfile().subscribe(res => {
                this.result = JSON.parse(JSON.stringify(res));
                if(this.result.success){
                    this.status = true;
                    this.username = this.result.username;
                    this.email = this.result.email;
                }else{
                    setTimeout(() => {
                        this.router.navigate(['/']);
                    }, 4000); 
                }
            })
        }
    }

}
