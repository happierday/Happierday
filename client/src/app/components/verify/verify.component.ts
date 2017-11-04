import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../../services/signup/signup.service';
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
    ) { this.verify(); }

    ngOnInit() {
        
    }

    verify(){
        this.signUpService.verifyUser(localStorage.getItem('hash')).subscribe(res => {
            
            this.response = JSON.parse(JSON.stringify(res));
            this.message = this.response.message;
            if(this.response.success){
                this.signUpService.storeUser(this.response.username,this.response.token);
                localStorage.removeItem('hash');
                this.messageClass = 'alert alert-success';
                setTimeout(() => {
                    this.router.navigate(['/profile/' + this.response.username]);                    
                },2000);
            }else{
                this.messageClass = 'alert alert-danger';
            }
        })
    }

}
