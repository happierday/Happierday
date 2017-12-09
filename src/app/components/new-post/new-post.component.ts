import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NewPostService } from '../../services/newPost/new-post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

    loggedIn;
    postForm;
    response;
    message;
    messageClass;
    jokes;
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        public authService: AuthService,
        private newPostService: NewPostService
    ) { this.createForm() }
    
    ngOnInit() {
    }

    createForm(){
        this.postForm = this.formBuilder.group({
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

    createNewPost(){
        const form = {
            title: this.postForm.get('title').value,
            content: this.postForm.get('content').value,
            username: localStorage.getItem('username')
        }
        this.newPostService.newPost(form).subscribe(res => {
            this.response = JSON.parse(JSON.stringify(res));
            this.message = this.response.message;
            if(this.response.success){
                this.messageClass = 'alert alert-success';
                setTimeout(() => {
                    this.router.navigate(['/home']);
                }, 1000);    
            }else{
                this.messageClass = 'alert alert-danger'
            }
        })     
    }

}
