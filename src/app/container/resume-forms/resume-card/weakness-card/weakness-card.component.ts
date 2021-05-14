import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Weakness } from 'src/app/models/weakness';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { WeaknessFormComponent } from '../../resume-dialogues/weakness-form/weakness-form.component';

@Component({
  selector: 'app-weakness-card',
  templateUrl: './weakness-card.component.html',
  styleUrls: ['./weakness-card.component.css']
})
export class WeaknessCardComponent implements OnInit {
  @Input() weakness!: Weakness;
  @Input() resumeId!: string;
  constructor(private matDialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    this.matDialog.open(WeaknessFormComponent, {
      width: '90%', height: '90%', data: {weakness: this.weakness, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteWeakness(this.resumeId, this.weakness._id)
      .subscribe((data: any) => {
        this.alertService.success('strength deleted Successfully');
      });
  }
}
