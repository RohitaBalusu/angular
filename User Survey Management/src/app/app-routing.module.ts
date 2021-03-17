
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { SaveSurveyComponent } from './save-survey/save-survey.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { UpdateSurveyComponent } from './update-survey/update-survey.component';
//

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
//const routes: Routes = []
export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
      path: 'signup', component: UserComponent,
      children: [{ path: '', component: SignupComponent }]
  },

  {
      path: 'login', component: UserComponent,
      children: [{ path: '', component: SignInComponent }]
  },
  { path : '', redirectTo:'/login', pathMatch : 'full'},
  
//];

//
//const routes: Routes = [
  //{ path: '', redirectTo: 'survey', pathMatch: 'full' },
  { path: 'surveys', component: SurveyListComponent },
  { path: 'add', component: SaveSurveyComponent },
  { path: 'update/:id', component: UpdateSurveyComponent },
  { path: 'details/:id', component: SurveyDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }