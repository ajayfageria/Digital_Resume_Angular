import { AuthRepository } from 'src/app/repository/auth-repository';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
userName = "";
isAlive = true;
  constructor(private authRepo: AuthRepository, private router: Router) { 
    this.authRepo.fetchMe().pipe(takeWhile(() => this.isAlive)).subscribe(user=>{
      this.userName = user.name;
    })
  }

  ngOnDestroy() {
        this.isAlive = false;
      }
    
      logout() {
        this.router.navigate(['logout']);
      }
}
