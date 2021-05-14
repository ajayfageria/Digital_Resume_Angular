import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRepository } from 'src/app/repository/auth-repository';
import { AlertService } from 'src/app/services/alertService';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
 loading:boolean=false;
 forgotPasswordForm: FormGroup;
 isEmailSent:boolean=false;
  constructor(private  authRepo: AuthRepository, private router:Router,private alertService:AlertService) { 
    this.forgotPasswordForm=new FormGroup({
      email: new FormControl(null,!this.isEmailSent? [Validators.required]:[]),
      code: new FormControl(null,[]),
      new_password: new FormControl(null,[]),
      confirm_password: new FormControl(null,[])

    })
  }
  sendEmail(){
    this.loading = true;
    this.authRepo.sendResetPasswordEmail(this.forgotPasswordForm.value).subscribe((data) => {
     this.loading = false;
     this.isEmailSent = true;
     this.alertService.success('Email has been sent to ' + this.forgotPasswordForm.get('email')?.value);
    this.forgotPasswordForm.get('code')?.setValidators([Validators.required]);
     this.forgotPasswordForm.get('new_password')?.setValidators([Validators.required]);
     this.forgotPasswordForm.get('confirm_password')?.setValidators([Validators.required]);
    }, (error => {
     this.loading = false;
   }));
   
    
  }
  changePassword(){
    this.loading = true;
    this.authRepo.resetPassword(this.forgotPasswordForm.value).subscribe((data)=>{
      console.log(data);
      console.log('password updated successfully ');
      this.router.navigate(['login']);
      this.loading = false;
    },(error => {
      this.loading = false;
    }))
  }
  ngOnInit(): void {
  }

}
