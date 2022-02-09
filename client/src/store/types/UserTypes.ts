import { IUser } from "../../models/IUser";

export interface UserState {
  analyticsData: any[] | undefined;
  loader: boolean;
  isAuth: boolean;
  user: IUser | null;
}

export enum UserActions {
  ADD_ANALYTICS_DATA = "ADD_ANALYTICS_DATA",
  CHANGE_LOADER_INSTANCE = "CHANGE_LOADER_INSTANCE",
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
}

interface AddAnalyticsDataAction {
  type: UserActions.ADD_ANALYTICS_DATA;
  payload: any[];
}

interface ChangeLoaderInstanceAction {
  type: UserActions.CHANGE_LOADER_INSTANCE;
  payload: boolean;
}

interface SetAuth {
  type: UserActions.SET_AUTH;
  payload: boolean;
}

interface SetUser {
  type: UserActions.SET_USER;
  payload: IUser;
}

export type UserAction =
  | AddAnalyticsDataAction
  | ChangeLoaderInstanceAction
  | SetAuth
  | SetUser;
