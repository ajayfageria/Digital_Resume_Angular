import { Component, Input, OnInit } from '@angular/core';
import { ProjectDetail } from 'src/app/models/project-detail';

@Component({
  selector: 'app-project-details-list',
  templateUrl: './project-details-list.component.html',
  styleUrls: ['./project-details-list.component.css']
})
export class ProjectDetailsListComponent implements OnInit {
  @Input() projectDetailList!: ProjectDetail[];
  @Input() resumeId!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
