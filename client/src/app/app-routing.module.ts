import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NonauthService } from './services/nonauth.service';

const appRoutes: Routes = [
    {
        path:  '',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: RegisterComponent,
        canActivate: [NonauthService]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonauthService]
    },
    {
        path: 'profile/:username',
        component: ProfileComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '**',
        component: HomeComponent,
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
