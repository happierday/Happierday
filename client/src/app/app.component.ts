import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    constructor(
        private router: Router
    ){
        
    }
    getDepth(outlet){
        return outlet.activatedRouteDate['depth'];
    }
    ngOnInit(){
        this.router.events
        .filter(e => e instanceof NavigationEnd)
        .pairwise()
        .subscribe(e => {
            localStorage.setItem('previousRouter', JSON.parse(JSON.stringify(e[0])).url);
        });
    }
}
