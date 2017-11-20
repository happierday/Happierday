import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    animations:[

    ]
})
export class NavbarComponent {
    username;
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}
    onLogOut(){
        this.authService.logOut();
        this.router.navigate(['/']);
    }
}
