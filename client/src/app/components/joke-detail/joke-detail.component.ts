import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes/jokes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {
    jokeDetail;
    constructor(
        private router: Router,
        private jokeService: JokesService
    ) { 
        this.jokeService.getJokeDetail(this.router.url.split('/')[2]).subscribe((res) => {
            this.jokeDetail = res;
        })
     }
    
    ngOnInit() {
        
    }
}
