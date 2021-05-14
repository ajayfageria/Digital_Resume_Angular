import { EmploymentHistoryFormComponent } from './../../resume-dialogues/employment-history-form/employment-history-form.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-employement-history-card',
  templateUrl: './employement-history-card.component.html',
  styleUrls: ['./employement-history-card.component.css']
})
export class EmployementHistoryCardComponent implements OnInit {
  @Input() employmentHistory!: EmploymentHistory;
  @Input() resumeId!: string;
  constructor(private dialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    const dialogRef = this.dialog.open(EmploymentHistoryFormComponent, {
      disableClose: true,
      data: {employmentHistory: this.employmentHistory, resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }

  delete() {
    this.resumeRepo.deleteEmploymentHistory(this.employmentHistory._id, this.resumeId)
      .subscribe((data: any) => {
        this.alertService.success('Employment History deleted Successfully');
      });
  }

}
