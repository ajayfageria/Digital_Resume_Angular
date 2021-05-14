import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';
import { IndustrialExposureFormComponent } from '../../resume-dialogues/industrial-exposure-form/industrial-exposure-form.component';

@Component({
  selector: 'app-industrial-exposure-card',
  templateUrl: './industrial-exposure-card.component.html',
  styleUrls: ['./industrial-exposure-card.component.css']
})
export class IndustrialExposureCardComponent implements OnInit {
  @Input() industrialExposure!: IndustrialExposure;
  @Input() resumeId!: string;
  constructor(private dialog: MatDialog, private resumeRepo: ResumeRepository, private alertService: AlertService) { }

  ngOnInit(): void {
  }
  edit() {
    const dialogRef = this.dialog.open(IndustrialExposureFormComponent, {
      disableClose: true,
      data: {industrialExposure: this.industrialExposure, resumeId: this.resumeId}
    });
    dialogRef.updateSize('90%', '90%');
  }

  delete() {
    this.resumeRepo.deleteIndustrialExposure(this.resumeId, this.industrialExposure._id)
      .subscribe((data: any) => {
        this.alertService.success('industrialExposure deleted Successfully');
      });
  }

}
