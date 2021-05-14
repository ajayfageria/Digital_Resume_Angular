import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { AuthRepository } from "../repository/auth-repository";

@Injectable()
export class Onboardingcomplete  implements CanActivate{
    constructor(private authRepo: AuthRepository, private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const user$ = this.authRepo.fetchMe();
        return user$.pipe(filter(data => !!data),map(data=>{
            if(data.onboarding === 200) {
                return true;
            } else {
                return this.router.navigate(['on-boarding']);
            }
        }))
    }

}
