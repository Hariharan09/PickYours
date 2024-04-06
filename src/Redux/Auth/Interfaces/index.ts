import {GenericStatusResponse} from '../../../Services';

export interface AuthSliceStateProp {
  loading?: boolean;
  error?: string;
  validateUser?: GenericStatusResponse;
  productList: any;
  selectedEmployeeEvent: any;
  addProductData: any;
}
