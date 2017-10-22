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
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        })
    }

    onRegisterSubmit(){
        console.log(this.userForm);
    }

    ngOnInit() {

    }

}
