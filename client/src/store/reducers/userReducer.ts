import { UserAction, UserActions, UserState } from "../types/UserTypes";

const initialStore: UserState = {
  analyticsData: undefined,
  loader: false,
  isAuth: false,
  user: null,
};

export const userReducer = (state = initialStore, action: UserAction) => {
  switch (action.type) {
    case UserActions.ADD_ANALYTICS_DATA:
      return { ...state, analyticsData: action.payload };
    case UserActions.CHANGE_LOADER_INSTANCE:
      return { ...state, loader: action.payload };
    case UserActions.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case UserActions.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const addAnalyticsDataAction = (payload: any) => ({
  type: UserActions.ADD_ANALYTICS_DATA,
  payload,
});

export const changeLoaderInstanceAction = (payload: any) => ({
  type: UserActions.CHANGE_LOADER_INSTANCE,
  payload,
});

export const setAuthAction = (payload: any) => ({
  type: UserActions.SET_AUTH,
  payload,
});

export const setUserAction = (payload: any) => ({
  type: UserActions.SET_USER,
  payload,
});
