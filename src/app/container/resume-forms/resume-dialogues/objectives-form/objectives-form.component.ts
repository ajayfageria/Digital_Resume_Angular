import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Objective } from 'src/app/models/objective';
import { ApiService } from 'src/app/services/apiService';
 
interface DataType {
  objective: Objective;
  resumeId: any;
}
@Component({
  selector: 'app-objectives-form',
  templateUrl: './objectives-form.component.html',
  styleUrls: ['./objectives-form.component.css']
})
export class ObjectivesFormComponent implements OnInit {
  form!: FormGroup;
  constructor(public dialogRef: MatDialogRef<ObjectivesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType, private apiService: ApiService) { }

  ngOnInit(): void {
    const objective = this.data.objective ? this.data.objective.objective : null;
    const date = this.data.objective ? this.data.objective.date : null;
    const place = this.data.objective ? this.data.objective.place : null;
    const declaration = this.data.objective ? this.data.objective.declaration : null;
    this.form = new FormGroup({
      objective: new FormControl(objective, [Validators.required]),
      date: new FormControl(date, [Validators.required]),
      place: new FormControl(place, [Validators.required]),
      declaration: new FormControl(declaration, [Validators.required]),
    });
  }
  addOrUpdate() {
    if (this.data.objective) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.apiService.addObjective(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.apiService.updateObjective(this.form.value, this.data.objective._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
