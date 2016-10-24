import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(public auth: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    loginGithub(): void {
        this.auth.signInWithGithub().then(() => this.navegarDashboard());
    }

    loginTwiter() {
        this.auth.signInWithTwitter().then(() => this.navegarDashboard());
    }

    loginGoogle() {
        this.auth.signInWithGoogle().then(() => this.navegarDashboard());
    }

    private navegarDashboard(): void {
        this.router.navigate(['/dashboard']);
    }

}
