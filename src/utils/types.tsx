// types.tsx
import {Method, AxiosRequestConfig} from 'axios';

// Interface for the input object of the fetchApi function
export interface IFetchApiType {
  method: Method; // Using Method type from Axios for HTTP methods
  endPoint: string;
  token?: string;
  data?: Record<string, any> | FormData; // Can be an object or FormData
  params?: Record<string, any>; // Query parameters
  formData?: boolean; // Flag to indicate if the data is FormData
}

// Type for the headers used in the Axios request
export type HeadersTypes = {
  Authorization?: string;
  'Content-Type'?: string;
  Accept?: string;
};

// Interface for the Axios configuration object
export interface IAxiosConfigTypes extends AxiosRequestConfig {
  method: Method;
  url: string;
  headers: HeadersTypes;
  data?: Record<string, any> | FormData; // Can be an object or FormData
  params?: Record<string, any>; // Query parameters
}

// Types for toast
export type ToastProps = {
  text1: string;
  text2?: string;
};
