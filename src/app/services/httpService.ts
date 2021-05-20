import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthUtils } from "../utility/auth-utils";
import { AlertService } from "./alertService";
import { ApiService } from "./apiService";

@Injectable()
export class HttpService{
    private baseURL='http://localhost:5000/api';
    constructor(private httpClient: HttpClient, private router: Router,private alertService: AlertService,){
    
    }
    get(url:string,paramData?:any):Observable<any>{//get
        const data={params:paramData,headers:this.getAuthHeaders()}
        return this.httpClient.get(this.baseURL+url,data);
    }
    post(url: string, body: any, isArrayBuffer = false):Observable<any> {//post
      const options: any = isArrayBuffer ? {
        headers: this.getAuthHeaders(), responseType: 'arraybuffer',
      } : {headers: this.getAuthHeaders()};
           return this.httpClient.post(this.baseURL + url, body,options).pipe(catchError(this.errorHandler.bind(this)));
         }
    patch(url: string, body: any) :Observable<any>{//patch
           return this.httpClient.patch(this.baseURL+url,body,{headers:this.getAuthHeaders()});
    }
    delete(url: string, body?: any):Observable<any>{
           return this.httpClient.request('delete',this.baseURL+url,
            {body, headers: this.getAuthHeaders()});
    }
    private getAuthHeaders(){
        return {
            Authorization: `Bearer ${AuthUtils.getAuthToken()}`
        }
    }
    private errorHandler(response: any) {
        const error = response.error;
        const keys = Object.keys(error);
        const key = keys[0];
        const message = response.message;
        const status = response.status;
        if (status === 401) {
          this.router.navigate(['logout']);
          this.alertService.message('Session Expired');
        }
        if (key === 'isTrusted') {
          this.alertService.error('Please connect to internet Connection');
        } else {
          this.alertService.error(message);
        }
        return throwError({message, error});
      }
    
}