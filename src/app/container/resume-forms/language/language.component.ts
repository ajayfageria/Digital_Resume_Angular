import { Resume } from 'src/app/models/resume';
import { Language } from './../../../models/language';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguageFormComponent } from '../resume-dialogues/language-form/language-form.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  @Input() languages!:Language[];
  @Input() resumeId!: string;
  constructor(private dialog: MatDialog) { }
  add() {
       const dialogRef = this.dialog.open(LanguageFormComponent, {
          disableClose: true,
          data: {resumeId: this.resumeId}
        });
        dialogRef.updateSize('90%', '90%');
      }
  ngOnInit(): void {
  }

}
