import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Language } from 'src/app/models/language';
import { ApiService } from 'src/app/services/apiService';

interface DataType {
  language: Language;
  resumeId: any;
}

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {
  form!: FormGroup;
  levelArray = ['basic', 'intermediate', 'advance'];
  constructor(public dialogRef: MatDialogRef<LanguageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType, private apiService: ApiService) { }

  ngOnInit(): void {
    const name = this.data.language ? this.data.language.name : null;
    const level = this.data.language ? this.data.language.level : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      level: new FormControl(level, [Validators.required]),
    });
  }
  addOrUpdate() {
    if (this.data.language) {
      this.update();
    } else {
      this.save();
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  update() {
    const observer$ = this.apiService.updateLanguage(this.form.value, this.data.language._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  save() {
    const observer$ = this.apiService.addLanguage(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
