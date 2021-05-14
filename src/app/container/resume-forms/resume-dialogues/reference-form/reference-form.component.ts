import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Refrence } from 'src/app/models/refrence';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/apiService';


interface DataType {
  reference: Refrence;
  resumeId: any;
}
@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.css']
})
export class ReferenceFormComponent implements OnInit {
  form!: FormGroup;
  constructor(public dialogRef: MatDialogRef<ReferenceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType, private resumeRepo: ResumeRepository) { }

  ngOnInit(): void {
    const name = this.data.reference ? this.data.reference.name : null;
    const relationship = this.data.reference ? this.data.reference.relationship : null;
    const company = this.data.reference ? this.data.reference.company : null;
    const email = this.data.reference ? this.data.reference.email : null;
    const phone = this.data.reference ? this.data.reference.phone : null;
    const address = this.data.reference ? this.data.reference.address : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      relationship: new FormControl(relationship, [Validators.required]),
      company: new FormControl(company, [Validators.required]),
      email: new FormControl(email, [Validators.required]),
      phone: new FormControl(phone, [Validators.required]),
      address: new FormControl(address, [Validators.required]),
    });
  }
  addOrUpdate() {
    if (this.data.reference) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addReference(this.form.value, this.data.resumeId);
    observer$.subscribe((data: any) => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateReference(this.form.value, this.data.resumeId, this.data.reference._id);
    observer$.subscribe((data: any) => {
      this.dialogRef.close();
    });
  }
}
