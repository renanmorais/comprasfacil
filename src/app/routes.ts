import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SobreComponent} from "./sobre/sobre.component";


export const appRoutes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'sobre', component: SobreComponent},
];
