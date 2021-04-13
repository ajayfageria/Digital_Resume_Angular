import { EmploymentHistoryFormComponent } from './../../resume-dialogues/employment-history-form/employment-history-form.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';

@Component({
  selector: 'app-employement-history-card',
  templateUrl: './employement-history-card.component.html',
  styleUrls: ['./employement-history-card.component.css']
})
export class EmployementHistoryCardComponent implements OnInit {
  @Input() employmentHistory!: EmploymentHistory;
  constructor(private dialog: MatDialog, private apiService: ApiService, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    const dialogRef = this.dialog.open(EmploymentHistoryFormComponent, {
      disableClose: true,
      data: {employmentHistory: this.employmentHistory}
    });
    dialogRef.updateSize('90%', '90%');
  }

  delete() {
    this.apiService.deleteEmploymentHistory(this.employmentHistory._id)
      .subscribe(data => {
        this.alertService.success('Employment History deleted Successfully');
      });
  }

}
