import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/httpService';
import { ApiService } from './services/apiService';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { AlertService } from './services/alertService';
import { VerificationComponent } from './container/verification/verification.component';
import { AuthGuard } from './guards/auth-guards';
import { AnonGuards } from './guards/anon-guards';
import { OnBoardingComponent } from './container/onboarding/on-boarding/on-boarding.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { Onboardingcomplete } from './guards/onboardingcomplete -guards';
import { Onboardingincomplete } from './guards/onboardingincomplete-guards';
import { Verificatoncompleted } from './guards/verificationcompleted-guards';
import { Verificatonincomplete } from './guards/verificatonincomplete-guards';
import { ImportYoutubeComponent } from './container/tabs/import-youtube/import-youtube.component';
import { OnboardingIntroComponent } from './container/onboarding/onboarding-intro/onboarding-intro.component';
import { ResumeFormComponent } from './container/resume-forms/resume-form/resume-form.component';
import { ResumeNameComponent } from './container/onboarding/resume-name/resume-name.component';
import { UploadComponent } from './container/tabs/upload/upload.component';
import { UploadFromDiskComponent } from './container/tabs/upload-from-disk/upload-from-disk.component';
import { UploadImageComponent } from './container/tabs/upload-image/upload-image.component';
import { ContactDetailsComponent } from './container/resume-forms/resume-card/contact-details/contact-details.component';
import { ContactDetailFormComponent } from './container/resume-forms/resume-dialogues/contact-detail-form/contact-detail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    OnBoardingComponent,
    DashboardComponent,
    OnboardingIntroComponent,
    ResumeNameComponent,
    UploadComponent,
    UploadImageComponent,
    UploadFromDiskComponent,
    ImportYoutubeComponent,
    ResumeFormComponent,
    ContactDetailsComponent,
    ContactDetailFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService,ApiService,AlertService,AuthGuard,AnonGuards,Onboardingcomplete,Onboardingincomplete,
     Verificatoncompleted,Verificatonincomplete
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
