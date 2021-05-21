import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, takeWhile } from 'rxjs/operators';
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
        param$.pipe(takeWhile(() => this.isAlive),map((res: any) => res.id)).subscribe((param: any) => {
          if (!param) {
            const observer$ = this.resumeRepo.fetchAllResume();
            const resume$ = observer$[2];
            resume$.pipe(takeWhile(() => this.isAlive))
              .subscribe((data: any) => {
                console.log(data);
                this.loading = false;
                this.resume = data[0];
              });
          } else{
            const resume$ = this.route.params.pipe(takeWhile(() => this.isAlive),
                     map(res => res.id), switchMap((id) => {
                       return this.resumeRepo.getResumeById(id);
                      }), filter(res => !!res));
                   resume$.subscribe(data => {
                    this.resume = data;
                     this.loading = false;
                   });
          }
        });
      }

}
