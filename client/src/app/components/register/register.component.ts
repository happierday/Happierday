import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    userForm: FormGroup;
  
    constructor(
        private  formBuilder: FormBuilder
    ) { 
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
            if(group.controls[password].value  === group.controls[confirmPassword].value){
                return null;
            }else{
                return {'matchPassword': true};
            }
        }
    }

    onRegisterSubmit(){
        console.log("form submited!");
    }

    ngOnInit() {

    }

}
