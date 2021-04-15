import { InterestFormComponent } from './../resume-dialogues/interest-form/interest-form.component';
import { Component, Input, OnInit } from '@angular/core';
import { Interest } from 'src/app/models/interest';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  @Input() interests!: Interest[];
  @Input() resumeId!: string;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
    add() {
       const dialogRef = this.dialog.open(InterestFormComponent, {
          disableClose: true,
          data: {resumeId: this.resumeId}
        });
        dialogRef.updateSize('90%', '90%');
      }

}
