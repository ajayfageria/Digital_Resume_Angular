import { Component, Input, OnInit } from '@angular/core';
import { Objective } from 'src/app/models/objective';

@Component({
  selector: 'app-objective-list',
  templateUrl: './objective-list.component.html',
  styleUrls: ['./objective-list.component.css']
})
export class ObjectiveListComponent implements OnInit {
  @Input() objectives!: Objective[];
  @Input() resumeId!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
