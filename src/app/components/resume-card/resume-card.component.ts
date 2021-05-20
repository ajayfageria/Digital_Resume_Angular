import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Resume } from 'src/app/models/resume';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alertService';
import { AddOrEditResumeComponent } from '../dialogues/add-or-edit-resume/add-or-edit-resume.component';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.css']
})
export class ResumeCardComponent implements OnInit {
  hover = false;
  @Input() resume!: Resume;
  constructor(private matDialog: MatDialog,private resumeRepo: ResumeRepository,private alertService: AlertService) { }

  ngOnInit(): void {
  }
  editResume() {
     this.matDialog.open(AddOrEditResumeComponent, {
         data: this.resume,
         width: '50%',
         height: '25%'
       });
}
delete() {
     this.resumeRepo.deleteResume(this.resume._id).subscribe(() => {
       this.alertService.success('Resume Deleted Successfully');
     });
  }
}