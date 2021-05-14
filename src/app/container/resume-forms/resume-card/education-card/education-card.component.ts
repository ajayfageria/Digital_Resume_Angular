import { EducationDetailsFormComponent } from './../../resume-dialogues/education-details-form/education-details-form.component';
import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { ApiService } from 'src/app/services/apiService';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alertService';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {
 @Input() education!: Education;
 @Input() resumeId!: string;
  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(EducationDetailsFormComponent, {
       width: '90%', height: '90%', data: {education: this.education, resumeId: this.resumeId}
         });
  }
  delete() {
    this.resumeRepo.deleteEducation(this.resumeId, this.education._id)
        .subscribe((data: any) => {
          this.alertService.success('education deleted Successfully');
        });
  }
}
