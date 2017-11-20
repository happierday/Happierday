import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import {trigger, state, animate, style, transition} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    animations:[
        trigger('routerTransition', [
            state('void', style({position:'fixed', width:'100%'}) ),
            state('*', style({position:'fixed', width:'100%'}) ),
            transition(':enter', [  // before 2.1: transition('void => *', [
              style({transform: 'translateX(100%)'}),
              animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
            ]),
            transition(':leave', [  // before 2.1: transition('* => void', [
              style({transform: 'translateX(0%)'}),
              animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
            ])
        ])
    ]
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
