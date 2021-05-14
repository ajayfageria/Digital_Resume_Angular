import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, takeWhile } from 'rxjs/operators';
import { AuthRepository } from 'src/app/repository/auth-repository';
import { AlertService } from 'src/app/services/alertService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  loading:boolean=false;
  title = 'resume-app';
  loginForm: FormGroup;
  isAlive = true;
  constructor(private router: Router,private authRepo: AuthRepository,private alterService: AlertService) { 
  this.loginForm=new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.maxLength(14),Validators.minLength(4)]),
  })}
  ngOnInit(): void {
  }
  ngOnDestroy() {
       this.isAlive = false;
     }
  signup(){
 this.router.navigate(['signup'])
  }
login(){
  const request$ = this.authRepo.login(this.loginForm.value);
  request$.pipe(takeWhile(() => this.isAlive),
       filter(res => !!res)).subscribe(data=>{
        this.loading = false;
    this.alterService.success('login Successful');
    this.router.navigate(['verify'],{queryParams: {email: data.email}});
  });
}
}
