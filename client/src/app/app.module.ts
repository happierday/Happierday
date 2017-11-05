import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpService } from './services/signup/signup.service';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login/login.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { NonauthService } from './services/auth/nonauth.service';
import { VerifyComponent } from './components/verify/verify.component';
import { JokeComponent } from './components/joke/joke.component';
import { JokesService } from './services/jokes/jokes.service';
import { JokeDetailComponent } from './components/joke-detail/joke-detail.component';
import { ProfileService } from './services/profile/profile.service';
import { GamesComponent } from './components/games/games.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        ProfileComponent,
        VerifyComponent,
        JokeComponent,
        JokeDetailComponent,
        GamesComponent
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
        ProfileService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
