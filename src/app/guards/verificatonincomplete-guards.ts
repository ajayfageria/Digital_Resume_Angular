import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { filter,map } from "rxjs/operators";
import { AuthRepository } from "../repository/auth-repository";
import { ApiService } from "../services/apiService";

@Injectable()
export class Verificatonincomplete  implements CanActivate{
    constructor(private authRepo: AuthRepository, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
       return this.authRepo.fetchMe().pipe(filter(data => !!data),map(data=>{
           if(!data.verified) {
               console.log("true");
               return true;
           } else {
               return this.router.navigate(['dashboard','resume']);
           }
       }))
    }

}
