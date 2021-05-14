import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Resume } from 'src/app/models/resume';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/apiService';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css']
})
export class OnBoardingComponent implements OnInit, OnDestroy {
  resume!: Resume;
  isFirstStepCompleted: Boolean = false;
  loading: Boolean = true;
  isAlive = true;
  constructor(private resumeRepo: ResumeRepository,private router: Router) { }
  ngOnDestroy() {
    this.isAlive = false;
      }
  ngOnInit(): void {
    const observer$ = this.resumeRepo.fetchAllResume();
    const resume$ = observer$[2];
    resume$.pipe(takeWhile(() => this.isAlive)).subscribe(data=>{
     if(data.length) {
       this.resume = data[0];
       this.isFirstStepCompleted=true;
       this.loading = false;

      }
   })
  }
  finish() {
        this.resumeRepo.updateOnBoarding({onboarding: 200}).subscribe((data: any) => {
         this.router.navigate(['dashboard']);
       });
     }

}
