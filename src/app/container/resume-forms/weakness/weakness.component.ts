import { Weakness } from './../../../models/weakness';
import { Component, Input, OnInit } from '@angular/core';
import { WeaknessFormComponent } from '../resume-dialogues/weakness-form/weakness-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-weakness',
  templateUrl: './weakness.component.html',
  styleUrls: ['./weakness.component.css']
})
export class WeaknessComponent implements OnInit {
  @Input() weaknesses!: Weakness[];
  @Input() resumeId!: string;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  add() {
        const dialogRef = this.dialog.open(WeaknessFormComponent, {
          disableClose: true,
         data: {resumeId: this.resumeId}
        });
        dialogRef.updateSize('90%', '90%');
      }
}
