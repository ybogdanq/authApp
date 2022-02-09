import axios from "axios";
import { Dispatch } from "react";
import { API_URL } from "../../http";
import { IUser } from "../../models/IUser";
import { AuthResponse } from "../../models/response/AuthResponse";
import ApiService from "../../services/ApiService";

import {
  addAnalyticsDataAction,
  changeLoaderInstanceAction,
  setAuthAction,
  setUserAction,
} from "../reducers/userReducer";
import { UserAction } from "../types/UserTypes";

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await ApiService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuthAction(true));
      dispatch(setUserAction(response.data.user));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const registrationUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await ApiService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuthAction(true));
      dispatch(setUserAction(response.data.user));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const logoutUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await ApiService.logout();
      localStorage.removeItem("token");
      dispatch(setAuthAction(false));
      dispatch(setUserAction({} as IUser));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };
};

export const checkAuth = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch(changeLoaderInstanceAction(true));
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      dispatch(setAuthAction(true));
      dispatch(setUserAction(response.data.user));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      dispatch(changeLoaderInstanceAction(false));
    }
  };
};

export const getChartData = () => {
  return (dispatch: Dispatch<UserAction>) => {
    try {
      const data: any[] = [];

      for (let i = 0; data.length < 1000; i++) {
        const analyticsDataItem = {
          day: i + 100,
          visitors: random(80, 1200), //random numbers from 80 to 1200
        };
        data.push(analyticsDataItem);
      }

      setTimeout(() => {
        dispatch(addAnalyticsDataAction(data));
        dispatch(changeLoaderInstanceAction(false));
      }, 1000); //delay implementation
    } catch (error) {
      console.log(error);
    }
  };
};

function random(min: number, max: number): number {
  const number = Math.floor(Math.random() * max); //taking a random number
  if (number < min) return random(min, max); //then compares with minimal number
  return number; //if more or equal to minimal number returns number
}
