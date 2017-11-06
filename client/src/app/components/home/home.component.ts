import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes/jokes.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    jokes;

    constructor(
        private jokesService: JokesService,
        private authService: AuthService
    ) { }


    reload(){
        location.reload();
    }
    ngOnInit() {
        this.jokesService.getJokes().subscribe((res) => {
            this.jokes = JSON.parse(JSON.stringify(res));
        })
    }

}
