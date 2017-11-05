import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { NonauthService } from './services/auth/nonauth.service';
import { VerifyComponent } from './components/verify/verify.component';
import { JokeComponent } from './components/joke/joke.component';
import { JokeDetailComponent } from './components/joke-detail/joke-detail.component';
import { GamesComponent } from './components/games/games.component';

const appRoutes: Routes = [
    {
        path:  '',
        component: HomeComponent
    },
    {
        path: 'jokes',
        component: JokeComponent
    },
    {
        path: 'guess',
        component: GamesComponent
    },
    {
        path: 'jokes/:title',
        component: JokeDetailComponent
    },
    {
        path: 'signup',
        component: RegisterComponent,
        canActivate: [NonauthService]
    },
    {
        path: 'logout',
        redirectTo: ''
    },
    {
        path: 'verify/:id',
        component: VerifyComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonauthService]
    },
    {
        path: 'profile/:username',
        component: ProfileComponent
    },
    {
        path: '**',
        component: HomeComponent,
    }
];

@NgModule({
    imports: [
      //deployment
      //RouterModule.forRoot(appRoutes,{useHash:true})
    // //development
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{
    
}
