import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRepository } from 'src/app/repository/auth-repository';
import { AlertService } from 'src/app/services/alertService';
import { ApiService } from 'src/app/services/apiService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  loading:boolean=false;
  title = 'resume-app';
  isDisabled:boolean=false;
  loginForm: FormGroup;

  constructor(private authRepository: AuthRepository, private router: Router,private alterService: AlertService) {
    //login form
    this.loginForm=new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.maxLength(14),Validators.minLength(4)]),
      confirm_password:new FormControl(null,[Validators.required]),
      name:new FormControl(null,[Validators.required]),
      experience_level:new FormControl(null,[Validators.required]),
      job_category:new FormControl(null,[Validators.required])
    })
   }

  ngOnInit(): void {
  }
  signup(){
    this.loading=true;
    this.isDisabled=true;
    this.authRepository.signup(this.loginForm.value).subscribe(data=>{
     
      this.alterService.success('signup Successful');
    this.loading=false;
    this.isDisabled=false;
    this.router.navigate([''])
    
  },(error)=>{
    this.loading=true;
    this.isDisabled=false;
    console.log(error)
  })

  }
  backLogin(){
    this.router.navigate([''])
  }
}
