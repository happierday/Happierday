import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes/jokes.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router }  from '@angular/router';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';
import { AuthGuardService } from '../../services/auth/auth-guard.service';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {
    username;
    jokeDetail;
    response;
    comments;
    authStatus;
    editForm;
    messageClass;
    message;
    editStatus = false;
    createdAt;
    editedAt;
    constructor(
        private router: Router,
        private jokesService: JokesService,
        private formBuilder: FormBuilder,
        public authService: AuthService,
    ) {
        this.createEditForm();
    }
    
    createEditForm(){
        this.editForm = this.formBuilder.group({
            title: ['',Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(50)
            ])],
            content: ['',Validators.compose([
                Validators.required,
                Validators.minLength(50),
                Validators.maxLength(5000)
            ])]
        })
    }

    ngOnInit() {
        this.username = localStorage.getItem('username');
        this.jokesService.getJokeDetail(this.router.url.split('/')[2]).subscribe((res) => {
            this.response = JSON.parse(JSON.stringify(res));
            this.jokeDetail = this.response.joke;
            this.createdAt = this.jokeDetail.createdAt.substring(0,10) + " " +this.jokeDetail.createdAt.substring(11,16);
            if(this.jokeDetail.editedAt){
                this.editedAt = this.jokeDetail.editedAt.substring(0,10) + " " +this.jokeDetail.editedAt.substring(11,16);
            }
            this.authStatus = this.response.auth;
        })
    }

    editPost(){
        const post = {
            title: this.editForm.get('title').value,
            content: this.editForm.get('content').value,
            username: localStorage.getItem('username')
        }
        this.jokesService.editPost(post,this.jokeDetail.ref).subscribe((res) =>{
            this.response = JSON.parse(JSON.stringify(res));
            this.message = this.response.message;
            this.jokeDetail = this.response.joke;
            if(this.response.success){
                this.messageClass = "alert alert-success";
            }else{
                this.messageClass = "alert alert-danger";
            }
            setTimeout(() => {
                location.reload();
                this.router.navigate(['/jokes/'+this.jokeDetail.ref]);
            }, 2000);
        })
    }

    edit(){
        this.editForm.get('title').setValue(this.jokeDetail.title);
        this.editForm.get('content').setValue(this.jokeDetail.content);
        this.editStatus = true;
    }

    deletePost(){
        this.jokesService.deletePost(this.jokeDetail.ref).subscribe((res) => {
            this.response = JSON.parse(JSON.stringify(res));
            this.message = this.response.message;
            if(this.response.success){
                this.messageClass = "alert alert-success";
            }else{
                this.messageClass = "alert alert-danger";
            }
            setTimeout(() => {
                this.router.navigate(['/home']);
            }, 2000);
        })
    }

    goBack(){
        this.editStatus = false;
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
