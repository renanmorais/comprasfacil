import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SobreComponent} from "./sobre/sobre.component";
import {LoginComponent} from "./login/login.component";


export const appRoutes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'sobre', component: SobreComponent}
];
