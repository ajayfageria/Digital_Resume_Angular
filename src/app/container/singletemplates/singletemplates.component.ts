import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, takeWhile } from 'rxjs/operators';
import { Resume } from 'src/app/models/resume';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-singletemplates',
  templateUrl: './singletemplates.component.html',
  styleUrls: ['./singletemplates.component.css']
})
export class SingletemplatesComponent implements OnInit, OnDestroy  {
  resume!: Resume;
  templateId: any;
  loading = false;
  isAlive = true;
  constructor(private route: ActivatedRoute, private resumeRepo: ResumeRepository) { }

 
  ngOnDestroy() {
    this.isAlive = false;
  }

  ngOnInit() {
    this.fetchResume();
    const templateId = this.route.params.pipe(takeWhile(() => this.isAlive), map((data: any) => data.templateId));
    templateId.subscribe((data: any) => {
      this.templateId = data;
    });
}
fetchResume() {
  const resume$ = this.route.params.pipe(takeWhile(() => this.isAlive),
    map((data) => data.id), switchMap(id => {
      return this.resumeRepo.getResumeById(id);
    }), filter((res) => !!res));
  resume$.subscribe((data: any) => {
    this.resume = data;
  });
}
}
