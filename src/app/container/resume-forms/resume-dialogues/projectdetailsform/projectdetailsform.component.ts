import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectDetail } from 'src/app/models/project-detail';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/apiService';

interface DataType {
  projectDetail: ProjectDetail;
  resumeId: any;
}
@Component({
  selector: 'app-projectdetailsform',
  templateUrl: './projectdetailsform.component.html',
  styleUrls: ['./projectdetailsform.component.css']
})
export class ProjectdetailsformComponent implements OnInit {
  form!: FormGroup;
  constructor(public dialogRef: MatDialogRef<ProjectdetailsformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) { }

  ngOnInit(): void {
    const title = this.data.projectDetail ? this.data.projectDetail.title : null;
    const description = this.data.projectDetail ? this.data.projectDetail.description : null;
    const role = this.data.projectDetail ? this.data.projectDetail.role : null;
    const duration = this.data.projectDetail ? this.data.projectDetail.duration : null;
    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      role: new FormControl(role, [Validators.required]),
      duration: new FormControl(duration, [Validators.required]),
    });
  }  
  addOrUpdate() {
    if (this.data.projectDetail) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addProjectDetail(this.form.value, this.data.resumeId);
    observer$.subscribe((data: any) => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateProjectDetail(this.form.value, this.data.resumeId, this.data.projectDetail._id);
    observer$.subscribe((data: any) => {
      this.dialogRef.close();
    });
  }
}
