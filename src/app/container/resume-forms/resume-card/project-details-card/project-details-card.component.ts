import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetail } from 'src/app/models/project-detail';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { ProjectdetailsformComponent } from '../../resume-dialogues/projectdetailsform/projectdetailsform.component';

@Component({
  selector: 'app-project-details-card',
  templateUrl: './project-details-card.component.html',
  styleUrls: ['./project-details-card.component.css']
})
export class ProjectDetailsCardComponent implements OnInit {
  @Input() projectDetail!: ProjectDetail;
  @Input() resumeId!: string;
  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(ProjectdetailsformComponent, {
      width: '90%', height: '90%', data: {projectDetail: this.projectDetail,resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteProjectDetail(this.resumeId, this.projectDetail._id)
      .subscribe((data: any) => {
        this.alertService.success('Project Details deleted Successfully');
      });
  }

}
