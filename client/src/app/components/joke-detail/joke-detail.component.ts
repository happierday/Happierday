import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes/jokes.service';
import { AuthService } from '../../services/auth/auth.service';
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
    constructor(
        private router: Router,
        private jokesService: JokesService,
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {
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
        this.jokesService.getJokeDetail(this.router.url.split('/')[2]).subscribe((res) => {
            this.response = JSON.parse(JSON.stringify(res));
            this.jokeDetail = this.response.joke;
            this.authStatus = this.response.auth;
        })
    }

    creteNewComment(){
        const commentDetail = {
            comment: this.commentForm.get('comment').value,
            username: this.username,
        }
        
        this.jokesService.sendPost(commentDetail,this.jokeDetail.ref).subscribe((res) => {
            this.jokeDetail = JSON.parse(JSON.stringify(res));
        })
    }

    likes(){
        if(this.username){
            this.jokesService.likeEvent(this.jokeDetail.ref, this.username).subscribe((res) => {
                this.response = JSON.parse(JSON.stringify(res));
                this.jokeDetail = this.response;
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
            this.jokesService.dislikeEvent(this.jokeDetail.ref, this.username).subscribe((res) => {
                this.response = JSON.parse(JSON.stringify(res));
                this.jokeDetail = this.response;
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
