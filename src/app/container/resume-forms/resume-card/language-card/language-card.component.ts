import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Language } from 'src/app/models/language';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { LanguageFormComponent } from '../../resume-dialogues/language-form/language-form.component';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.css']
})
export class LanguageCardComponent implements OnInit {
  @Input() language!: Language;
  @Input() resumeId!: string;
  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(LanguageFormComponent, {
      width: '90%', height: '90%', data: {language: this.language, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteLanguage(this.resumeId, this.language._id)
      .subscribe((data: any) => {
        this.alertService.success('Language deleted Successfully');
      });
  }

}
