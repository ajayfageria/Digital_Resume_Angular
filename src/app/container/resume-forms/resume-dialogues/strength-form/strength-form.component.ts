import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Strength } from 'src/app/models/strength';
import { ApiService } from 'src/app/services/apiService';


interface DataType {
  strength: Strength;
  resumeId: any;
} 
@Component({
  selector: 'app-strength-form',
  templateUrl: './strength-form.component.html',
  styleUrls: ['./strength-form.component.css']
})
export class StrengthFormComponent implements OnInit {
  form!: FormGroup;
  constructor(public dialogRef: MatDialogRef<StrengthFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType, private apiService: ApiService) { }

  ngOnInit(): void {
    const name = this.data.strength ? this.data.strength.name : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required])
    });
  }
  addOrUpdate() {
    if (this.data.strength) {
      this.update();
    } else {
      this.save();
    }
  }

  update() {
    const observer$ = this.apiService.updateStrength(this.form.value, this.data.strength._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.apiService.addStrength(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

}
