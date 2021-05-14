import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Refrence } from 'src/app/models/refrence';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { ReferenceFormComponent } from '../../resume-dialogues/reference-form/reference-form.component';

@Component({
  selector: 'app-reference-card',
  templateUrl: './reference-card.component.html',
  styleUrls: ['./reference-card.component.css']
})
export class ReferenceCardComponent implements OnInit {
  @Input() reference!: Refrence;
  @Input() resumeId!: string;
  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(ReferenceFormComponent, {
      width: '90%', height: '90%', data: {reference: this.reference, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteReference(this.resumeId, this.reference._id)
      .subscribe((data: any) => {
        this.alertService.success('Reference deleted Successfully');
      });
  }

}
