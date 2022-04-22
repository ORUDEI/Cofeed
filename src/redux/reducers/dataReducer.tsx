import {
  START_DATA,
  DATA_SUCCESS,
  DATA_ERROR,
  START_PROFILE,
  PROFILE_SUCCESS,
  PROFILE_ERROR,
} from "../types/index";

const initialState = {
  data: [],
  error: null,
  loading: false,
  profile: [],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case START_DATA:
    case START_PROFILE:
      return {
        ...state,
        loading: action.payload,
      };
    case DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case PROFILE_SUCCESS: 
    return {
      ...state,
      loading: false,
      error: null,
      profile: action.payload,
    }
    case DATA_ERROR:
    case PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
