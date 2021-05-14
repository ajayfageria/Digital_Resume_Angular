import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/apiService';

interface DataType {
  award: AwardsAchivement;
  resumeId: string;
}
@Component({
  selector: 'app-award-form',
  templateUrl: './award-form.component.html',
  styleUrls: ['./award-form.component.css']
})
export class AwardFormComponent implements OnInit {
  form!: FormGroup;
  constructor(public dialogRef: MatDialogRef<AwardFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private resumeRepo: ResumeRepository) { }

  ngOnInit(): void {
    const awardAchievement = this.data.award ? this.data.award.awards_and_achivements : null;
    this.form = new FormGroup({
      awards_and_achivements: new FormControl(awardAchievement, [Validators.required])
    });
  }
  addOrUpdate() {
    if (this.data.award) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addAward(this.form.value, this.data.resumeId);
    observer$.subscribe((data: any) => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateAward(this.form.value, this.data.resumeId, this.data.award._id);
    observer$.subscribe((data: any) => {
      this.dialogRef.close();
    });
  }

}
