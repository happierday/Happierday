import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { AuthGuardService } from '../../services/auth/auth-guard.service';
import { Location } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import 'rxjs/add/operator/pairwise';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [
        trigger('login', [
            state('void', style({width:'100%'})),
            state('*', style({width:'100%'})),
            transition(':enter', [  // before 2.1: transition('void => *', [
              style({transform: 'translateY(75%)'}),
              animate('0.5s ease-in-out', style({transform: 'translateY(0%) rotateX(45deg)'})),
            ]),
        ])
    ]
})
export class LoginComponent implements OnInit {
    userForm: FormGroup;
    logedIn;
    message;
    messageClass;
    response;
    url;
    state = "inactive";
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private loginService: LoginService,
        private authGuardService: AuthGuardService,
        private location: Location
    ) { 
        this.logedIn = false;
        this.createForm();
    }

    createForm(){
        this.userForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit() {
        this.state = "active"
    }

    disableForm(){
        this.userForm.controls['username'].disable();
        this.userForm.controls['password'].disable();
    }

    enableForm(){
        this.userForm.controls['username'].enable();
        this.userForm.controls['password'].enable();
    }

    onLoginSubmit(){
        this.logedIn = true;
        this.disableForm();
        const user = {
            username: this.userForm.get('username').value,
            password: this.userForm.get('password').value
        }
        this.loginService.Login(user).subscribe(res => {
            this.response = JSON.parse(JSON.stringify(res));
            this.message = this.response.message;
            if(this.response.success){
                this.messageClass = 'alert alert-success';
                this.loginService.storeUser(this.response.token,user.username);
                setTimeout(()=>{
                    if(localStorage.getItem('previousRouter')){
                        this.router.navigate([localStorage.getItem('previousRouter')]);
                    }else{
                        this.router.navigate(['/']);
                    }   
                },1000)
            }else{
                this.logedIn = false;
                this.messageClass = 'alert alert-danger';
                this.enableForm();
            }
        });
    }
}
