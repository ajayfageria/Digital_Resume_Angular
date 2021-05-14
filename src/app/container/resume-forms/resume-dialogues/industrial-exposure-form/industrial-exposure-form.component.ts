import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/apiService';


interface DataType {
  industrialExposure: IndustrialExposure;
  resumeId: any;
}
@Component({
  selector: 'app-industrial-exposure-form',
  templateUrl: './industrial-exposure-form.component.html',
  styleUrls: ['./industrial-exposure-form.component.css']
})
export class IndustrialExposureFormComponent implements OnInit {
  form!: FormGroup;
  monthArray = ['', 'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'November', 'December'];
  constructor(public dialogRef: MatDialogRef<IndustrialExposureFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) { }

  ngOnInit(): void {
    const organisation = this.data.industrialExposure ? this.data.industrialExposure.organisation : null;
    const city = this.data.industrialExposure ? this.data.industrialExposure.city : null;
    const state = this.data.industrialExposure ? this.data.industrialExposure.state : null;
    const startMonth = this.data.industrialExposure ? this.data.industrialExposure.start_month : null;
    const startYear = this.data.industrialExposure ? this.data.industrialExposure.start_year : null;
    const endMonth = this.data.industrialExposure ? this.data.industrialExposure.end_month : null;
    const endYear = this.data.industrialExposure ? this.data.industrialExposure.end_year : null;
    const work = this.data.industrialExposure ? this.data.industrialExposure.work : null;
    this.form = new FormGroup({
      organisation: new FormControl(organisation, [Validators.required]),
      city: new FormControl(city, [Validators.required]),
      state: new FormControl(state, [Validators.required]),
      start_month: new FormControl(startMonth, [Validators.required]),
      start_year: new FormControl(startYear, [Validators.required]),
      end_month: new FormControl(endMonth),
      end_year: new FormControl(endYear),
      work: new FormControl(work, [Validators.required]),
    });
  }
  addOrUpdate() {
    if (this.data.industrialExposure) {
      this.update();
    } else {
      this.save();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  update() {
    const observer$ = this.resumeRepo.updateIndustrialExposure(this.form.value, this.data.industrialExposure._id);
    observer$.subscribe((data: any) => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.resumeRepo.addIndustrialExposure(this.form.value, this.data.resumeId);
    observer$.subscribe((data: any) => {
      this.dialogRef.close();
    });
  }

}
