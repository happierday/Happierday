import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userForm: FormGroup;
    logedIn;
    message;
    messageClass;
    response;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private loginService: LoginService
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
                this.loginService.storeUser(this.response.token);
                setTimeout(()=>{
                    this.router.navigate(['/profile']);
                },2000)
            }else{
                this.logedIn = false;
                this.messageClass = 'alert alert-danger';
                this.enableForm();
            }
        });
    }
}
