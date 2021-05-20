import { SingletemplatesComponent } from './container/singletemplates/singletemplates.component';
import { NotFoundComponent } from './container/not-found/not-found.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HelpcenterComponent } from './container/dashboard/helpcenter/helpcenter.component';
import { ResumeComponent } from './container/dashboard/resume/resume.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { LoginComponent } from './container/login/login.component';
import { OnBoardingComponent } from './container/onboarding/on-boarding/on-boarding.component';
import { OnboardingIntroComponent } from './container/onboarding/onboarding-intro/onboarding-intro.component';
import { SignupComponent } from './container/signup/signup.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AnonGuards } from './guards/anon-guards';
import { AuthGuard } from './guards/auth-guards';
import { Onboardingcomplete } from './guards/onboardingcomplete -guards';
import { Onboardingincomplete } from './guards/onboardingincomplete-guards';
import { Verificatoncompleted } from './guards/verificationcompleted-guards';
import { Verificatonincomplete } from './guards/verificatonincomplete-guards';
import { SettingComponent } from './container/dashboard/setting/setting.component';
import { DashboardComponent } from './container/layout/dashboard/dashboard.component';
import { TemplatesComponent } from './container/templates/templates.component';

const routes: Routes = [
  {
    path: '', canActivate: [AnonGuards],
    children: [
      {path: 'signup', component: SignupComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: '', component: LoginComponent}
     ]
  },
   {  
      path: '', //canActivate: [AuthGuard, Verificatonincomplete], 
      children: [
        { path: 'verify', component: VerificationComponent,}
       ]
   },
   {
             path: '', 
             children: [
              {path: 'on-boarding', component: OnboardingIntroComponent}, 
              {path: 'on-boarding/add', component: OnBoardingComponent}],
             //canActivate: [AuthGuard, Verificatoncompleted, Onboardingincomplete]
    },
   {
             path: '',
             children: [
               {path: 'dashboard', component: DashboardComponent,
              children:[
                {path: 'resume', component: ResumeComponent},
                {path: 'settings', component: SettingComponent},
                {path: 'help-center', component: HelpcenterComponent},
                {path: 'resume/template/:id', component: TemplatesComponent},
                {path: 'resume/template/:id/:templateId', component: SingletemplatesComponent}
              ]
              },
              {path:'logout',component: LogoutComponent},
              {path:'**',component: NotFoundComponent}
             ],
            //  canActivate: [AuthGuard, Verificatoncompleted, Onboardingcomplete]
    }
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
