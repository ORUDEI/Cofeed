import {
  START_DATA,
  DATA_SUCCESS,
  DATA_ERROR,
  START_PROFILE,
  PROFILE_SUCCESS,
  PROFILE_ERROR,
} from "../types/index";
import { randomData, profileData } from "../../dummy";

export const getDataAction = () => {
  return async (dispatch: any) => {
    dispatch(loadData());
    try {
      const resp = await randomData;
      dispatch(successDataLoading(resp));
    } catch (error) {
      dispatch(errorDataLoading());
    }
  };
};

export const getProfileAction = () => {
  return async (dispatch: any) => {
    dispatch(profileDataLoad());
    try {
      const resp = await profileData;
      dispatch(profileDataSuccess(resp));
    } catch (error) {
      dispatch(errorProfileLoading());
    }
  };
};

const loadData = () => ({
  type: START_DATA,
  payload: true,
});

const successDataLoading = (data: any) => ({
  type: DATA_SUCCESS,
  payload: data,
});

const errorDataLoading = () => ({
  type: DATA_ERROR,
  payload: true,
});

const profileDataLoad = () => ({
  type: START_PROFILE,
  payload: true,
});

const profileDataSuccess = (data: any) => ({
  type: PROFILE_SUCCESS,
  payload: data,
});

const errorProfileLoading = () => ({
  type: PROFILE_ERROR,
  payload: true,
});
