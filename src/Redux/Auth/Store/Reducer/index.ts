import {
  VALIDATE_USER,
  VALIDATE_USER_FAILURE,
  VALIDATE_USER_SUCCESS,
  PRODUCT,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  SELECTED_EVENT,
  ADD_PRODUCT,
} from '../../../../Redux';
import {AuthSliceStateProp} from '../../Interfaces';

const initialState: AuthSliceStateProp = {
  loading: false,
  error: '',
  validateUser: undefined,
  productList: undefined,
  selectedEmployeeEvent: undefined,
  addProductData: undefined,
};

const AuthReducer = (state = initialState, action: any) => {
  console.log('action------------------111', action);

  switch (action.type) {
    /**
     * VALIDATE_USER
     */

    case VALIDATE_USER:
      state = {...state, loading: true};
      break;
    case VALIDATE_USER_SUCCESS:
      state = {...state, validateUser: action.payload};
      break;
    case VALIDATE_USER_FAILURE:
      state = {...state, validateUser: action.payload};
      break;

     /**
     * PRODUCT
     */

    case PRODUCT:
      state = {...state, loading: true};
      break;
    case PRODUCT_SUCCESS:
      state = {...state, productList: action.payload};
      break;
    case PRODUCT_FAILURE:
      state = {...state, loading: false};
      break;

    /**
     *  selected employee Events
     */
    case SELECTED_EVENT:
      state = {...state, selectedEmployeeEvent: action.payload};
      break;

         /**
     *  ADD PRODUCT
     */
    case ADD_PRODUCT:
      state = {...state, addProductData: action.payload};
      break;

    default:
      state = state;
      break;
  }
  return state;
};
export {AuthReducer};
