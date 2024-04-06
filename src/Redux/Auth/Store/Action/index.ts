import {
  SET_REGISTER_MOBILE_NUMBER,
  PRODUCT,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  VALIDATE_USER,
  VALIDATE_USER_FAILURE,
  VALIDATE_USER_SUCCESS,
  SELECTED_EVENT,
  ADD_PRODUCT,
} from '../../../../Redux';

/**
 * validateUser
 */

export const validateUser = (params: any) => {
  return {
    type: VALIDATE_USER,
    payload: params,
  };
};
export const validateUserSuccess = (response: any) => {
  return {
    type: VALIDATE_USER_SUCCESS,
    payload: response,
  };
};
export const validateUserFailure = (error: any) => {
  return {
    type: VALIDATE_USER_FAILURE,
    payload: error,
  };
};

/**
 * submitLoginOtp
 */

export const product = (params: any) => {
  console.log('params', params);
  
  return {
    type: PRODUCT,
    payload: params,
  };
};
export const productSuccess = (response: any) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: response,
  };
};
export const productFailure = (error: any) => {
  return {
    type: PRODUCT_FAILURE,
    payload: error,
  };
};

/**
 * setSelectedEvent
 */

export const setSelectedEvent = (value: any) => {
  return {
    type: SELECTED_EVENT,
    payload: value,
  };
};

/**
 * addProduct
 */

export const addProduct = (value: any) => {
  return {
    type: ADD_PRODUCT,
    payload: value,
  };
};

