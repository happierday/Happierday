import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VerifyComponent } from './components/verify/verify.component';
import { JokeDetailComponent } from './components/joke-detail/joke-detail.component';
import { NewPostComponent } from './components/new-post/new-post.component';

import { SignUpService } from './services/signup/signup.service';
import { LoginService } from './services/login/login.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { NonauthService } from './services/auth/nonauth.service';
import { JokesService } from './services/jokes/jokes.service';
import { ProfileService } from './services/profile/profile.service';
import { NewPostService } from './services/newPost/new-post.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        ProfileComponent,
        VerifyComponent,
        JokeDetailComponent,
        NewPostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [
        SignUpService,
        LoginService,
        AuthService,
        AuthGuardService,
        NonauthService,
        JokesService,
        ProfileService,
        NewPostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
