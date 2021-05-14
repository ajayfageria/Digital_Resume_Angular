import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Interest } from 'src/app/models/interest';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { InterestFormComponent } from '../../resume-dialogues/interest-form/interest-form.component';

@Component({
  selector: 'app-interest-card',
  templateUrl: './interest-card.component.html',
  styleUrls: ['./interest-card.component.css']
})
export class InterestCardComponent implements OnInit {
  @Input() interest!: Interest;
  @Input() resumeId!: string;
  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(InterestFormComponent, {
      width: '90%', height: '90%', data: {interest: this.interest, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteInterest(this.resumeId, this.interest._id)
      .subscribe((data: any)=> {
        this.alertService.success('Interest deleted Successfully');
      });
  }

}
