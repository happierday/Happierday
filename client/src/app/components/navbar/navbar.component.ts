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
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}
    
    
    ngOnInit() {
        
    }

    onLogOut(){
        this.authService.logOut();
        this.router.navigate(['/']);
    }
}
