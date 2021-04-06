import { Resume } from './../models/resume';
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Users } from "../models/users";
import { AuthUtils } from "../utility/auth-utils";
import { HttpService } from "./httpService";

@Injectable()
export class ApiService{
  
constructor(private httpService:HttpService){

}
loginandsettoken(data:{email:string,password:string}):Observable<Users>{
   return this.httpService.get('/user/login',data).pipe(map(res=>{
    AuthUtils.setAuthToken(res.token);
       return res.user;
   }));
}

signup(data:{
    email:string,password:string,confirm_password:string,
    name:string,job_category: string, experience_level: string
}):Observable<Users>{
    return this.httpService.post('/user/signup',data)
}
sendPasswordResetEmail(data:{email:string}):Observable<any>{
  return this.httpService.get('/user/reset/password/email',data);
}
resetPassword(data:{code:string,new_password:string,confirm_password:string}):Observable<Users>{
    return this.httpService.patch('/user/reset/password', data)
}
fetchMe():Observable<Users>{
    return this.httpService.get('/user/fetch');
}
fetchAllResume(): Observable<Resume[]>{
return this.httpService.get('/resume/all');
}
saveResume(data:{name:string}){
    return this.httpService.post('/resume/add/resume',data);
}
saveOrUpdate(image: File, resumeId: string){
    const formData = new FormData();
    formData.append("profile_image",image);
return this.httpService.post('/resume/add/image/' + resumeId, formData);
}
deleteImage(resumeId: string){
  return this.httpService.delete('/resume/delete/image/' + resumeId);
}
addVideo(resumeId: string,data: {video_url: string}){
    return this.httpService.patch('/resume/import/video/' + resumeId,data)

}
}