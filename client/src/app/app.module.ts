import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from  './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpService } from './services/signup.service';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        DashboardComponent,
        RegisterComponent,
        LoginComponent,
        ProfileComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        SignUpService,
        LoginService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
