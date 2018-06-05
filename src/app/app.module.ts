import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './core/app.routing.module';
import { CustomMaterialModule } from './core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginsService } from './services/login/logins.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationService } from './services/authentification/authentification.service';
import { Interceptor } from './core/interceptor';
import { HttpModule } from '@angular/http';
import { TokenStorage } from './core/token.storage';
import { NavigationbarComponent } from './components/toolbar/navigationbar/navigationbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [LoginsService,
              AuthentificationService,
              Interceptor,
              TokenStorage
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
