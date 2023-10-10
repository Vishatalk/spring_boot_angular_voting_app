import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { VoterpageComponent } from './voterpage/voterpage.component';

const routes: Routes = [{path:'admin',component:AdminComponent},
{path:'login',component:LoginComponent},
{path:'signin',component:SigninComponent},
{path:'admindashboard',component:AdmindashboardComponent},
{path:'voterpage',component:VoterpageComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactusComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
