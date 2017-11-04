import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    username;
    loggedIn;
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}
    
    
    ngOnInit() {
        this.loggedIn = this.authService.loggedIn();
    }

    onLogOut(){
        this.authService.logOut();
        this.router.navigate(['/']);
    }
}
