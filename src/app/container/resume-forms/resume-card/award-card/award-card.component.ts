import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { AwardFormComponent } from '../../resume-dialogues/award-form/award-form.component';

@Component({
  selector: 'app-award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.css']
})
export class AwardCardComponent implements OnInit {
  @Input() award!: AwardsAchivement;
  @Input() resumeId!: string;
  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(AwardFormComponent, {
      width: '90%', height: '90%', data: {award: this.award, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteAward(this.resumeId, this.award._id)
      .subscribe((data: any) => {
        this.alertService.success('Award deleted Successfully');
      });
  }
}
