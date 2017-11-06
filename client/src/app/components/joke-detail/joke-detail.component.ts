import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes/jokes.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {
    jokeDetail;
    response;
    authStatus;
    commentForm
    constructor(
        private router: Router,
        private jokeService: JokesService,
        private formBuilder: FormBuilder
    ) { 
        this.createForm();
        location.reload();
    }
     createForm(){
        this.commentForm = this.formBuilder.group({
            comment: ['',Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(1000)
            ])]
        })
    }
    ngOnInit() {
        this.jokeService.getJokeDetail(this.router.url.split('/')[2]).subscribe((res) => {
            this.response = JSON.parse(JSON.stringify(res));
            this.jokeDetail = this.response.joke;
            this.authStatus = this.response.auth;
        })
    }
}
