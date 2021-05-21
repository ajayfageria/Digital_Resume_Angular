import { Component, Input, OnInit } from '@angular/core';
import { ProjectDetail } from 'src/app/models/project-detail';

@Component({
  selector: 'app-template-project-detail',
  templateUrl: './template-project-detail.component.html',
  styleUrls: ['./template-project-detail.component.css']
})
export class TemplateProjectDetailComponent implements OnInit {
  @Input() projectDetail!: ProjectDetail;
  constructor() { }

  ngOnInit(): void {
  }

}
