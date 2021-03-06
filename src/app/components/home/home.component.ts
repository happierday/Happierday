import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes/jokes.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    //on div will be true, false otherwise
    position = false;
    jokes;
    state = "inactive";
    constructor(
        private jokesService: JokesService,
        public authService: AuthService
    ) { }
    
    ngOnInit() {
        this.jokesService.getJokes().subscribe((res) => {
            this.jokes = JSON.parse(JSON.stringify(res));
            //console.log(this.jokes)
        })
    }

}
