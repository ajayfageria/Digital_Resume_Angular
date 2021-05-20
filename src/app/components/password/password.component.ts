import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { AuthRepository } from 'src/app/repository/auth-repository';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  isAlive = true;
  constructor(private authRepo: AuthRepository) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      old_password: new FormControl(null, [Validators.required]),
      new_password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }
  ngOnDestroy() {
    this.isAlive = false;
  }

  updatePassword() {
    this.authRepo.updatePassword(this.form.value)
      .pipe(takeWhile(() => this.isAlive)).subscribe((data: any) => {

    });
  }

}
