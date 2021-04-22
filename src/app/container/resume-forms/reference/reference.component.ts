import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Refrence } from 'src/app/models/refrence';
import { ReferenceFormComponent } from '../resume-dialogues/reference-form/reference-form.component';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {
  @Input() resumeId!: string;
  @Input() references!: Refrence[];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  add() {
        const dialogRef = this.dialog.open(ReferenceFormComponent, {
          disableClose: true,
          data: {resumeId: this.resumeId}
        });
       dialogRef.updateSize('90%', '90%');
    }

}
