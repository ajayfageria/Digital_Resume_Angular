import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Objective } from 'src/app/models/objective';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { ObjectivesFormComponent } from '../../resume-dialogues/objectives-form/objectives-form.component';

@Component({
  selector: 'app-objective-card',
  templateUrl: './objective-card.component.html',
  styleUrls: ['./objective-card.component.css']
})
export class ObjectiveCardComponent implements OnInit {
  @Input() objective!: Objective;
  @Input() resumeId!: string;
  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(ObjectivesFormComponent, {
      width: '90%', height: '90%', data: {objective: this.objective, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteObjective(this.resumeId, this.objective._id)
      .subscribe((data: any) => {
        this.alertService.success('Objective deleted Successfully');
      });
  }

}
