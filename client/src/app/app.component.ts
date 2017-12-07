import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent{
    constructor(
        private router: Router
    ){ 
    }
    ngOnInit(){
        sessionStorage.clear();
        this.router.events
        .filter(e => e instanceof NavigationEnd)
        .pairwise()
        .subscribe(e => {
            sessionStorage.setItem('url',JSON.parse(JSON.stringify(e[0])).url);
        });
    }
}
