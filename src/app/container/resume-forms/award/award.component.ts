import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { AwardFormComponent } from '../resume-dialogues/award-form/award-form.component';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {
  @Input() resumeId!: string;
  @Input() awards!: AwardsAchivement[];
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  add() {
    this.matDialog.open(AwardFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }
}
