import { EducationComponent } from './container/resume-forms/education/education.component';
import { Education } from './models/education';
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
import { ContactDetailsComponent } from './container/resume-forms/contact-details/contact-details.component';
import { ContactDetailFormComponent } from './container/resume-forms/resume-dialogues/contact-detail-form/contact-detail-form.component';
import { EducationDetailsFormComponent } from './container/resume-forms/resume-dialogues/education-details-form/education-details-form.component';
import { EducationCardComponent } from './container/resume-forms/resume-card/education-card/education-card.component';
import { EducationListComponent } from './container/resume-forms/resume-lists/education-list/education-list.component';
import { EmploymentHistoryComponent } from './container/resume-forms/employment-history/employment-history.component';
import { EmploymentHistoryFormComponent } from './container/resume-forms/resume-dialogues/employment-history-form/employment-history-form.component';
import { EmployementHistoryListsComponent } from './container/resume-forms/resume-lists/employement-history-lists/employement-history-lists.component';
import { EmployementHistoryCardComponent } from './container/resume-forms/resume-card/employement-history-card/employement-history-card.component';
import { InterestComponent } from './container/resume-forms/interest/interest.component';
import { InterestCardComponent } from './container/resume-forms/resume-card/interest-card/interest-card.component';
import { InterestFormComponent } from './container/resume-forms/resume-dialogues/interest-form/interest-form.component';
import { InterestListComponent } from './container/resume-forms/resume-lists/interest-list/interest-list.component';
import { SkillsComponent } from './container/resume-forms/skills/skills.component';
import { SkillListsComponent } from './container/resume-forms/resume-lists/skill-lists/skill-lists.component';
import { SkillFormComponent } from './container/resume-forms/resume-dialogues/skill-form/skill-form.component';
import { SkillCardComponent } from './container/resume-forms/resume-card/skill-card/skill-card.component';
import { LanguageComponent } from './container/resume-forms/language/language.component';
import { LanguageListComponent } from './container/resume-forms/resume-lists/language-list/language-list.component';
import { LanguageCardComponent } from './container/resume-forms/resume-card/language-card/language-card.component';
import { LanguageFormComponent } from './container/resume-forms/resume-dialogues/language-form/language-form.component';
import { IndustrialExposureComponent } from './container/resume-forms/industrial-exposure/industrial-exposure.component';
import { IndustrialExposureFormComponent } from './container/resume-forms/resume-dialogues/industrial-exposure-form/industrial-exposure-form.component';
import { IndustrialExposureListComponent } from './container/resume-forms/resume-lists/industrial-exposure-list/industrial-exposure-list.component';
import { IndustrialExposureCardComponent } from './container/resume-forms/resume-card/industrial-exposure-card/industrial-exposure-card.component';
import { AwardComponent } from './container/resume-forms/award/award.component';
import { AwardListComponent } from './container/resume-forms/resume-lists/award-list/award-list.component';
import { AwardCardComponent } from './container/resume-forms/resume-card/award-card/award-card.component';
import { AwardFormComponent } from './container/resume-forms/resume-dialogues/award-form/award-form.component';

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
    EducationComponent,
    EducationDetailsFormComponent,
    EducationCardComponent,
    EducationListComponent,
    EmploymentHistoryComponent,
    EmploymentHistoryFormComponent,
    EmployementHistoryListsComponent,
    EmployementHistoryCardComponent,
    InterestComponent,
    InterestCardComponent,
    InterestFormComponent,
    InterestListComponent,
    SkillsComponent,
    SkillListsComponent,
    SkillFormComponent,
    SkillCardComponent,
    LanguageComponent,
    LanguageListComponent,
    LanguageCardComponent,
    LanguageFormComponent,
    IndustrialExposureComponent,
    IndustrialExposureFormComponent,
    IndustrialExposureListComponent,
    IndustrialExposureCardComponent,
    AwardComponent,
    AwardListComponent,
    AwardCardComponent,
    AwardFormComponent
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
