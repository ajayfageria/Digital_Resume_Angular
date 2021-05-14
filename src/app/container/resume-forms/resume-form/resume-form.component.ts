import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Resume } from 'src/app/models/resume';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit, OnDestroy{
 resume!: Resume;
 isAlive = true;
 loading = false;
  constructor(private resumeRepo: ResumeRepository, private route: ActivatedRoute) { }
  ngOnDestroy() {
       this.isAlive = false;
      }
      ngOnInit() {
        this.loading = true;
        const param$ = this.route.params;
        param$.pipe(takeWhile(() => this.isAlive)).subscribe(param => {
          if (!!param) {
            const observer$ = this.resumeRepo.fetchAllResume();
            const resume$ = observer$[2];
            resume$.pipe(takeWhile(() => this.isAlive))
              .subscribe((data: any) => {
                console.log(data);
                this.loading = false;
                this.resume = data[0];
              });
          }
        });
      }

}
