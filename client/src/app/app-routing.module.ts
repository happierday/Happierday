import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VerifyComponent } from './components/verify/verify.component';
import { JokeDetailComponent } from './components/joke-detail/joke-detail.component';
import { NewPostComponent } from './components/new-post/new-post.component';

import { AuthGuardService } from './services/auth/auth-guard.service';
import { NonauthService } from './services/auth/nonauth.service';

const appRoutes: Routes = [
    {
        path:  'home',
        component: HomeComponent,
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
        path: 'newpost',
        component: NewPostComponent
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
        redirectTo: '/home'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{
    
}
