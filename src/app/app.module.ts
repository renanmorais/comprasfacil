import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {MaterialModule} from "@angular/material";
import {appRoutes} from "./routes";
import {HeaderComponent} from './header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SobreComponent} from './sobre/sobre.component';
import {LoginComponent} from './login/login.component';
import {AuthProviders, AngularFireModule, AuthMethods} from "angularfire2";

import * as firebase from 'firebase';
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./auth/auth-guard";
import {UnauthGuard} from "./auth/unauth-guard";

export const myFirebaseConfig = {
    apiKey: "AIzaSyA0ZFEUu2HwOdURWDcnP2u4p0JFICDIqj4",
    authDomain: "comprasfacil-8bda3.firebaseapp.com",
    databaseURL: "https://comprasfacil-8bda3.firebaseio.com",
    storageBucket: "comprasfacil-8bda3.appspot.com",
    messagingSenderId: "433158017521"
}


const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DashboardComponent,
        SobreComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    ],
    providers: [
        AuthService,
        AuthGuard,
        UnauthGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
