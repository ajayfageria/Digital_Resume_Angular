import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetail } from 'src/app/models/project-detail';
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
  constructor(private matDialog: MatDialog, private apiService: ApiService, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(ProjectdetailsformComponent, {
      width: '90%', height: '90%', data: {projectDetail: this.projectDetail}
    });
  }

  delete() {
    this.apiService.deleteProjectDetail(this.projectDetail._id)
      .subscribe(data => {
        this.alertService.success('Project Details deleted Successfully');
      });
  }

}
