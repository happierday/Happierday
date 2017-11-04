import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';
import { JokesService } from '../../services/jokes/jokes.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
    loggedIn;
    postForm;
    response;
    message;
    messageClass;
    jokes;
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private jokesService: JokesService,
        private authService: AuthService
    ) { this.createForm() }
    
    ngOnInit() {
        this.loggedIn = this.authService.loggedIn();
        this.jokesService.getJokes().subscribe((res) =>{
            this.jokes = res;
        })
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
        this.jokesService.sendPost(form).subscribe(res => {
            console.log(res);
            this.response = JSON.parse(JSON.stringify(res));
            this.message = this.response.message;
            if(this.response.success){
                this.messageClass = 'alert alert-success';
                setTimeout(() => {
                    location.reload();
                }, 1000);
                
            }else{
                this.messageClass = 'alert alert-danger'
            }
        })     
    }
}
