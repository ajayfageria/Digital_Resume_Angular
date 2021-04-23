import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetail } from 'src/app/models/project-detail';
import { ProjectdetailsformComponent } from '../resume-dialogues/projectdetailsform/projectdetailsform.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() resumeId!: string;
  @Input() projectDetails!: ProjectDetail[];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  add() {
    const dialogRef = this.dialog.open(ProjectdetailsformComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
