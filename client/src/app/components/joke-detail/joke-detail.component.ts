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
    username;
    jokeDetail;
    response;
    authStatus;
    commentForm;
    messageClass;
    message;
    likeOrDislike = false;
    constructor(
        private router: Router,
        private jokeService: JokesService,
        private formBuilder: FormBuilder
    ) { 
        this.jokeService.getJokeDetail(this.router.url.split('/')[2]).subscribe((res) => {
            this.response = JSON.parse(JSON.stringify(res));
            this.jokeDetail = this.response.joke;
            this.authStatus = this.response.auth;
        })
        this.createForm();
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
        this.username = localStorage.getItem('username');
    }

    likes(){
        if(this.username){
            this.jokeService.likeEvent(this.jokeDetail.ref, this.username).subscribe((res) => {
                this.response = JSON.parse(JSON.stringify(res));
                this.jokeDetail = this.response;
                this.likeOrDislike = true;
            })
        }else{
            this.message = 'Please Login first to perform like action!';
            this.messageClass = 'alert alert-warning',
            setTimeout(() => {
                this.router.navigate(['/login']);
            }, 2000)
        }   
    }

    dislikes(){
        if(this.username){
            this.jokeService.dislikeEvent(this.jokeDetail.ref, this.username).subscribe((res) => {
                this.response = JSON.parse(JSON.stringify(res));
                this.jokeDetail = this.response;
                this.likeOrDislike = true;
            })
        }else{
            this.message = 'Please Login first to perform like action!';
            this.messageClass = 'alert alert-warning',
            setTimeout(() => {
                this.router.navigate(['/login']);
            }, 2000)
        }  
    }

}
