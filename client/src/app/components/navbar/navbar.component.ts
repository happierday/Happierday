import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    logedIn = false;
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.checkLogedIn();
    }
    onLogOut(){
        this.authService.logOut();
        setTimeout(()=>{
            this.router.navigate(['/']);
        },2000)
    }
    
    checkLogedIn(){
        if(localStorage.getItem('token')){
            this.logedIn = true;
        }else{
            this.logedIn = false;
        }
    }
}
