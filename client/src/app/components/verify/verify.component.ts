import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
    response;
    message;
    messageClass;
    constructor(
        private router: Router,
        private signUpService: SignUpService
    ) {  }

    ngOnInit() {
        this.verify();
    }

    verify(){
        this.signUpService.verifyUser(localStorage.getItem('id')).subscribe(res => {
            
            this.response = JSON.parse(JSON.stringify(res));
            this.message = this.response.message;
            if(this.response.success){
                this.messageClass = 'alert alert-success';
                localStorage.setItem('token',this.response.token);
                setTimeout(() => {
                    this.router.navigate(['/profile/'+localStorage.getItem('username')]);
                }, 2000);
            }else{
                this.messageClass = 'alert alert-danger';
            }
        })
    }

}
