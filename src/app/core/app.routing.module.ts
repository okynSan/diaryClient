import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './autoguard';

const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent , canActivate: [AuthGuard] },
    { path: '', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
