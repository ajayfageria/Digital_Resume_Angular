import { IndustrialExposure } from './../../../models/industrial-exposure';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IndustrialExposureFormComponent } from '../resume-dialogues/industrial-exposure-form/industrial-exposure-form.component';

@Component({
  selector: 'app-industrial-exposure',
  templateUrl: './industrial-exposure.component.html',
  styleUrls: ['./industrial-exposure.component.css']
})
export class IndustrialExposureComponent implements OnInit {
  @Input() industrialExposures!: IndustrialExposure[];
  @Input() resumeId!: string;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  add() {
      this.dialog.open(IndustrialExposureFormComponent, {
         width: '90%', height: '90%', data: {resumeId: this.resumeId}
       });
    }

}
