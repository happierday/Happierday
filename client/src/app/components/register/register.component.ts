import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';
import { SignUpService } from '../../services/signup.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    userForm: FormGroup;
    signedUp;
    registerResponse;
    message;
    messageClass;
    emailResponse;
    emailMessage;
    emailStatus;
    usernameResponse;
    usernameMessage;
    usernameStatus;
    constructor(
        private formBuilder: FormBuilder,
        private signUpService: SignUpService,
        private router: Router
    ) { 
        this.signedUp = false;
        this.createForm();
    }

    createForm(){
        this.userForm = this.formBuilder.group({
            username: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(20),
                this.validateUsername
            ])],
            email: ['', Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(50),
                this.validateEmail
            ])],
            password: ['', Validators.compose([
                Validators.required,
                Validators.minLength(8),
                this.validatePassword
            ])],
            confirmPassword: ['', Validators.required
            ]
        },{validator:this.matchPassword('password','confirmPassword')});
    }

    //disable/enable forms
    disableForm(){
        this.userForm.controls['username'].disable();
        this.userForm.controls['email'].disable();
        this.userForm.controls['password'].disable();
        this.userForm.controls['confirmPassword'].disable();
    }

    enableForm(){
        this.userForm.controls['username'].enable();
        this.userForm.controls['email'].enable();
        this.userForm.controls['password'].enable();
        this.userForm.controls['confirmPassword'].enable();
    }

    //validate user inputs
    validateEmail(controls){
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(regExp.test(controls.value)){
            return null;
        }else{
            return {'validateEmail':true}
        }
    }

    validatePassword(controls){
        const regExp = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+$/);
        if(regExp.test(controls.value)){
            return null;
        }else{
            return {'validatePassword':true}
        }
    }

    validateUsername(controls){
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if(regExp.test(controls.value)){
            return null;
        }else{
            return {'validateUsername':true}
        }
    }

    matchPassword(password,confirmPassword){
        return  (group: FormGroup) =>{
            if(group.controls[password].value && group.controls[password].value){
                if(group.controls[password].value  === group.controls[confirmPassword].value){
                    return null;
                }else{
                    return {'matchPassword': true};
                }
            }else {
                return {'matchPassword': true};
            }
        }
    }

    onRegisterSubmit(){
        this.signedUp = true;
        this.disableForm();
        const user = {
            username: this.userForm.get('username').value,
            email: this.userForm.get('email').value,
            password: this.userForm.get('password').value
        }
        this.signUpService.registerUser(user).subscribe(res => {
            this.registerResponse = JSON.parse(JSON.stringify(res));
            if(this.registerResponse.success){
                this.messageClass = 'alert alert-success';
                localStorage.setItem('hash',this.registerResponse.hash);
            }else{
                this.messageClass = 'alert alert-danger';
                this.signedUp = false;
                this.enableForm();
            }
            this.message = this.registerResponse.message;
        });
    }

    ngOnInit() {

    }

}
