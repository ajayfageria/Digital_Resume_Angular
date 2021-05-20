import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeWhile } from 'rxjs/operators';
import { Resume } from 'src/app/models/resume';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alertService';

@Component({
  selector: 'app-add-or-edit-resume',
  templateUrl: './add-or-edit-resume.component.html',
  styleUrls: ['./add-or-edit-resume.component.css']
})
export class AddOrEditResumeComponent implements OnInit {
  form!: FormGroup;
  isAlive = true;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Resume,
  private dialogRef: MatDialogRef<AddOrEditResumeComponent>, private alertService: AlertService,
  private resumeRepo: ResumeRepository) { }

  ngOnInit(): void {
    const name = this.data ? this.data.name : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required])
    });
  }
  addOrUpdate() {
    if (this.data) {
      this.update();
    } else {
      this.add();
    }
  }

  add() {
    this.resumeRepo.saveResume(this.form.value).pipe(takeWhile(() => this.isAlive))
      .subscribe(data => {
        this.alertService.success('Resume Added Successfully');
        this.dialogRef.close();
      });
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  update() {
    this.resumeRepo.editResume(this.form.value, this.data._id).pipe(takeWhile(() => this.isAlive))
      .subscribe(() => {
        this.alertService.success('Resume Updated Successfully');
        this.dialogRef.close();
      });
  }
}
