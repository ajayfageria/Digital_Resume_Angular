import { Resume } from './../models/resume';
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Users } from "../models/users";
import { AuthUtils } from "../utility/auth-utils";
import { HttpService } from "./httpService";

@Injectable()
export class ApiService {

    constructor(private httpService: HttpService) {

    }
    loginandsettoken(data: { email: string, password: string }): Observable<Users> {
        return this.httpService.get('/user/login', data).pipe(map(res => {
            AuthUtils.setAuthToken(res.token);
            return res.user;
        }));
    }

    signup(data: {
        email: string, password: string, confirm_password: string,
        name: string, job_category: string, experience_level: string
    }): Observable<Users> {
        return this.httpService.post('/user/signup', data)
    }
    sendPasswordResetEmail(data: { email: string }): Observable<any> {
        return this.httpService.get('/user/reset/password/email', data);
    }
    resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<Users> {
        return this.httpService.patch('/user/reset/password', data)
    }
    fetchMe(): Observable<Users> {
        return this.httpService.get('/user/fetch');
    }
    fetchAllResume(): Observable<Resume[]> {
        return this.httpService.get('/resume/all');
    }
    saveResume(data: { name: string }) {
        return this.httpService.post('/resume/add/resume', data);
    }
    saveOrUpdate(image: File, resumeId: string) {
        const formData = new FormData();
        formData.append("profile_image", image);
        return this.httpService.post('/resume/add/image/' + resumeId, formData);
    }
    deleteImage(resumeId: string) {
        return this.httpService.delete('/resume/delete/image/' + resumeId);
    }
    addVideo(resumeId: string, data: { video_url: string }) {
        return this.httpService.patch('/resume/import/video/' + resumeId, data)
    }
    updateContactDetails(data: any, contactDetailId: string) {
        return this.httpService.patch('/resume/update/contactDetails/' + contactDetailId, data);
    }
    addContactDetails(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/contactDetails/' + resumeId, data);
    }
    addEducation(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/education/' + resumeId, data);
    }

    updateEducation(data: any, educationId: string) {
        return this.httpService.patch('/resume/update/education/' + educationId, data);
    }
    deleteEducation(educationId: string) {
        return this.httpService.delete('/resume/delete/education/' + educationId)
    }
    deleteEmploymentHistory(employmentId: string) {
        return this.httpService.delete('/resume/delete/employmentHistory/' + employmentId);
    }

    addEmploymentHistory(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/employmentHistory/' + resumeId, data);
    }

    updateEmploymentHistory(data: any, employmentId: string) {
        return this.httpService.patch('/resume/update/employmentHistory/' + employmentId, data);
    }
    addInterest(data: any, resumeId: string) {
        return this.httpService.post('/resume/add/interest/' + resumeId, data);
    }

    updateInterest(data: any, interestId: string) {
        return this.httpService.patch('/resume/update/interest/' + interestId, data);
    }
    deleteInterest(interestId: string) {
        return this.httpService.delete('/resume/delete/interest/' + interestId);
    }
}