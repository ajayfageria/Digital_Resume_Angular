import { EducationDetailsFormComponent } from './../resume-dialogues/education-details-form/education-details-form.component';
import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
   @Input() resumeId!: string;
   @Input() educations!: Education[];
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  add(){
    this.matDialog.open(EducationDetailsFormComponent, {
            width: '90%', height: '90%', data: {resumeId: this.resumeId}
          });
  }
}
