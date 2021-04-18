import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Skill } from 'src/app/models/skill';
import { ApiService } from 'src/app/services/apiService';

interface DataType {
  skill: Skill;
  resumeId: string;
}

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {
  form!: FormGroup;
  levelArray = ['basic', 'intermediate', 'advance'];
  constructor(public dialogRef: MatDialogRef<SkillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType, private apiService: ApiService) { }

  ngOnInit(): void {
    const skill = this.data.skill ? this.data.skill.skill : null;
    const level = this.data.skill ? this.data.skill.level : null;
    this.form = new FormGroup({
      skill: new FormControl(skill, [Validators.required]),
      level: new FormControl(level, [Validators.required])
    });
  }
  cancel() {
    this.dialogRef.close();
  }

  addOrUpdate() {
    if (this.data.skill) {
      this.update();
      this.dialogRef.close();
    } else {
      this.save();
      this.dialogRef.close();
    }
  }

  update() {
    const observer$ = this.apiService.updateSkill(this.form.value, this.data.skill._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.apiService.addSkill(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
