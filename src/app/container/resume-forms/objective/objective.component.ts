import { Objective } from './../../../models/objective';
import { Resume } from 'src/app/models/resume';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ObjectivesFormComponent } from '../resume-dialogues/objectives-form/objectives-form.component';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
 @Input() objectives!: Objective[];
 @Input() resumeId!: string;
  constructor(private dialog: MatDialog) { }
  add() {
        const dialogRef = this.dialog.open(ObjectivesFormComponent, {
          disableClose: true,
         data: {resumeId: this.resumeId}
        });
        dialogRef.updateSize('90%', '90%');
      }
  ngOnInit(): void {
  }

}
function ObjectiveFormComponent(ObjectiveFormComponent: any, arg1: { disableClose: true; data: { resumeId: string; }; }) {
  throw new Error('Function not implemented.');
}

