import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes/jokes.service';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    commentForm;
    comments;
    messageClass;
    message;
    constructor(
        private jokesService: JokesService,
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService
    ) { 
        this.createForm();
    }

    ngOnInit() {
        this.jokesService.getComments(this.router.url.split('/')[2]).subscribe((res) => {
            this.comments = JSON.parse(JSON.stringify(res));
            if(this.comments.message){
                this.message = this.comments.message;
                this.messageClass = 'alert alert-info';
            }
        })
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

    creteNewComment(){
        const commentDetail = {
            username: localStorage.getItem('username'),
            comment: this.commentForm.get('comment').value,
        }
        this.jokesService.sendPost(commentDetail,this.router.url.split('/')[2]).subscribe((res) => {
            this.comments = JSON.parse(JSON.stringify(res));
            this.message = undefined;
            this.messageClass = undefined;
        })
    }
}
