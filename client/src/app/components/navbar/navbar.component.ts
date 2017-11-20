import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    username;
    constructor(
        public authService: AuthService,
        private router: Router
    ) {}

    onLogOut(){
        this.authService.logOut();
        setTimeout(() => {
            this.router.navigate(['/home']);
        }, 1000);
    }
}
