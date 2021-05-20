import { ActionReducerMap} from '@ngrx/store/src/models';
import * as fromUser  from './user-reducers';
import {createSelector} from '@ngrx/store';
import * as fromResume from './resume-reducer';
export interface RootReducerState{
    user: fromUser.UserReducerState;
    resume: fromResume.ResumeReducerState;
}
export const rootReducer : ActionReducerMap <RootReducerState> = {
    user: fromUser.UserReducer,
    resume: fromResume.ResumeReducer
}
const getUserRootState = (state: any) => state.user;
export const userLoggedIn = createSelector(getUserRootState, fromUser.loggedIn);
export const userLoggingIn = createSelector(getUserRootState, fromUser.loggingIn);
export const getUser = createSelector(getUserRootState, fromUser.user);

const getResumeRootState = (state: any) => state.resume;
export const resumeLoading = createSelector(getResumeRootState, fromResume.getLoading);
export const resumeLoaded = createSelector(getResumeRootState, fromResume.getLoaded);
export const getResume = createSelector(getResumeRootState, fromResume.getResumeList);
export const resumeEntities = createSelector(getResumeRootState, fromResume.getEntities);
export const resumeIds = createSelector(getResumeRootState, fromResume.getIds);
export const resumeError = createSelector(getResumeRootState, fromResume.getError);