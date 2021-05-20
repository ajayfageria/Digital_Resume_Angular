import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrEditResumeComponent } from 'src/app/components/dialogues/add-or-edit-resume/add-or-edit-resume.component';
import { Resume } from 'src/app/models/resume';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnDestroy {
  hover = false;
  resumeList: Resume[] = [];
  isAlive = true;
  loading = false;
  error = false;
  constructor(private resumeRepo: ResumeRepository, private matDialog: MatDialog) { }

  ngOnInit() {
    this.fetchData();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
    const observer$ = this.resumeRepo.fetchAllResume();
    observer$[2].subscribe((resumes: any) => {
      this.resumeList = resumes;
    });
    observer$[0].subscribe((loading: any) => {
      this.loading = loading;
    });
  }
  addResume() {
       this.matDialog.open(AddOrEditResumeComponent, {
          height: '25%',
         width: '50%'
       });
    }
}
