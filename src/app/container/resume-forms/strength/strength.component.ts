import { StrengthFormComponent } from './../resume-dialogues/strength-form/strength-form.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Strength } from 'src/app/models/strength';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent implements OnInit {
  @Input() strength!: Strength[];
  @Input() resumeId!: string;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  add() {
    const dialogRef = this.dialog.open(StrengthFormComponent, {
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }
}
