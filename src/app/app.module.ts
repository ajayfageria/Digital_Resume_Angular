import { DashboardComponent } from './container/layout/dashboard/dashboard.component';
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
import { ObjectiveComponent } from './container/resume-forms/objective/objective.component';
import { ObjectiveListComponent } from './container/resume-forms/resume-lists/objective-list/objective-list.component';
import { ObjectiveCardComponent } from './container/resume-forms/resume-card/objective-card/objective-card.component';
import { ObjectivesFormComponent } from './container/resume-forms/resume-dialogues/objectives-form/objectives-form.component';
import { ReferenceComponent } from './container/resume-forms/reference/reference.component';
import { ReferenceCardComponent } from './container/resume-forms/resume-card/reference-card/reference-card.component';
import { ReferenceFormComponent } from './container/resume-forms/resume-dialogues/reference-form/reference-form.component';
import { ReferenceListComponent } from './container/resume-forms/resume-lists/reference-list/reference-list.component';
import { ProjectDetailsComponent } from './container/resume-forms/project-details/project-details.component';
import { ProjectDetailsListComponent } from './container/resume-forms/resume-lists/project-details-list/project-details-list.component';
import { ProjectdetailsformComponent } from './container/resume-forms/resume-dialogues/projectdetailsform/projectdetailsform.component';
import { ProjectDetailsCardComponent } from './container/resume-forms/resume-card/project-details-card/project-details-card.component';
import { StrengthComponent } from './container/resume-forms/strength/strength.component';
import { StrengthCardComponent } from './container/resume-forms/resume-card/strength-card/strength-card.component';
import { StrengthFormComponent } from './container/resume-forms/resume-dialogues/strength-form/strength-form.component';
import { StrengthListComponent } from './container/resume-forms/resume-lists/strength-list/strength-list.component';
import { WeaknessComponent } from './container/resume-forms/weakness/weakness.component';
import { WeaknessFormComponent } from './container/resume-forms/resume-dialogues/weakness-form/weakness-form.component';
import { WeaknessListComponent } from './container/resume-forms/resume-lists/weakness-list/weakness-list.component';
import { WeaknessCardComponent } from './container/resume-forms/resume-card/weakness-card/weakness-card.component';
import { Truncate } from './pipes/truncate';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';
import { AuthRepository } from './repository/auth-repository';
import {ResumeRepository} from './repository/resume-repository';
import { ResumeComponent } from './container/dashboard/resume/resume.component';
import { SettingComponent } from './container/dashboard/setting/setting.component';
import { HelpcenterComponent } from './container/dashboard/helpcenter/helpcenter.component';
import { HeaderComponent } from './container/layout/header/header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './container/not-found/not-found.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { PasswordComponent } from './components/password/password.component';
import { ResumeCardComponent } from './components/resume-card/resume-card.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    OnBoardingComponent,
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
    AwardFormComponent,
    ObjectiveComponent,
    ObjectiveListComponent,
    ObjectiveCardComponent,
    ObjectivesFormComponent,
    ReferenceComponent,
    ReferenceCardComponent,
    ReferenceFormComponent,
    ReferenceListComponent,
    ProjectDetailsComponent,
    ProjectDetailsListComponent,
    ProjectdetailsformComponent,
    ProjectDetailsCardComponent,
    StrengthComponent,
    StrengthCardComponent,
    StrengthFormComponent,
    StrengthListComponent,
    WeaknessComponent,
    WeaknessFormComponent,
    WeaknessListComponent,
    WeaknessCardComponent,
    Truncate,
    ResumeComponent,
    SettingComponent,
    HelpcenterComponent,
    HeaderComponent,
    LogoutComponent,
    NotFoundComponent,
    ProfileSettingsComponent,
    PasswordComponent,
    ResumeCardComponent,
    ErrorComponent
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
    StoreModule.forRoot(rootReducer),
  ],
  providers: [HttpService,ApiService,AlertService,AuthGuard,AnonGuards,Onboardingcomplete,Onboardingincomplete,
     Verificatoncompleted,Verificatonincomplete,AuthRepository, ResumeRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
