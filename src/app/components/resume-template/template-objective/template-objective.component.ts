import { Component, Input, OnInit } from '@angular/core';
import { Objective } from 'src/app/models/objective';

@Component({
  selector: 'app-template-objective',
  templateUrl: './template-objective.component.html',
  styleUrls: ['./template-objective.component.css']
})
export class TemplateObjectiveComponent implements OnInit {
  @Input() objective!: Objective;
  constructor() { }

  ngOnInit(): void {
  }

}
