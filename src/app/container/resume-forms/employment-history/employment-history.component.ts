import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { EmploymentHistoryFormComponent } from '../resume-dialogues/employment-history-form/employment-history-form.component';

@Component({
  selector: 'app-employment-history',
  templateUrl: './employment-history.component.html',
  styleUrls: ['./employment-history.component.css']
})
export class EmploymentHistoryComponent implements OnInit {
  @Input() employmentHistories!: EmploymentHistory[];
  @Input() resumeId!: string;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  add() {
    this.dialog.open(EmploymentHistoryFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }

}
