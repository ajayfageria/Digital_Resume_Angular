import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRepository } from 'src/app/repository/auth-repository';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authRepo: AuthRepository, private router: Router) {
     this.authRepo.logout();
     this.router.navigate(['']);
    
     }

  ngOnInit(): void {
  }

}
