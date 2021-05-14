import { ApiService } from 'src/app/services/apiService';
import { FormGroup, FormControl, Validators, ValidatorFn, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-resume-name',
  templateUrl: './resume-name.component.html',
  styleUrls: ['./resume-name.component.css']
})
export class ResumeNameComponent implements OnInit {
  resumeForm!: FormGroup;
  @Input() isCompleted: Boolean = false;
  loading: boolean = false;
  checkValidOTP!: AsyncValidatorFn;
  static isNumberCheck: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined;
  constructor(private resumeRepo: ResumeRepository) { }
 
  ngOnInit(): void {
    this.resumeForm = new FormGroup({
      name: new FormControl(null,[Validators.required])
    });
  
    

  }

 

  createResume(){
    //save data using api
    this.loading = true;
    this.resumeRepo.saveResume(this.resumeForm.value).subscribe(data=>{
      this.loading = false;
      this.isCompleted = true;
    },()=>{
      this.loading = false;
    });
    
  }

}
