import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { Users } from 'src/app/models/users';
import { AuthRepository } from 'src/app/repository/auth-repository';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  form!: FormGroup;
  isAlive = true;
  user!: Users;
  constructor(public authRepo: AuthRepository) { }

  ngOnInit(): void {
    this.initUser();
    const name = this.user ? this.user.name : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required]),
    });
  }
  ngOnDestroy() {
    this.isAlive = false;
  }
  initUser() {
    this.authRepo.fetchMe().pipe(takeWhile(() => this.isAlive)).subscribe(user => {
      this.user = user;
    });
  }

  update() {
    this.authRepo.updateProfile(this.form.value).pipe(takeWhile(() => this.isAlive))
      .subscribe((data: any) => {

      });
  }

}
