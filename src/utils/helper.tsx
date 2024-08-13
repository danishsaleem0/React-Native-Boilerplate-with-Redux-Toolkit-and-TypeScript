import {BASE_URL} from '@env';
import axios from 'axios';
import moment from 'moment';
import {getAccessToken} from './localStoreUtil';
import {IAxiosConfigTypes, IFetchApiType, HeadersTypes} from './types';

const base_url = BASE_URL;

// api helper
export const fetchApi = async ({
  method,
  endPoint,
  token,
  data,
  params,
  formData,
}: IFetchApiType): Promise<any> => {
  const headers: HeadersTypes = {};
  if (token) {
    headers.Authorization = 'Bearer ' + (await getAccessToken());
  }

  if (formData) {
    headers['Content-Type'] = 'multipart/form-data';
    headers['Accept'] = 'multipart/form-data';
  } else {
    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';
  }
  const config: IAxiosConfigTypes = {
    method,
    url: `${base_url}/api/parkingApp/${endPoint}`,
    headers,
    data: data ? data : undefined,
  };

  if (params) config.params = params;

  return await axios(config);
};

// moment helper
class Dateformatter {
  HH_MM_A = (date: Date): string => {
    return moment(date).format('hh:mm A');
  };
  MM_DD_YYYY = (date: Date): string => {
    return moment(date).format('MM/DD/YYYY');
  };
  MMM_DD_YYYY = (date: Date): string => {
    return moment(date).format('MMM DD YYYY');
  };
  DD_MM_YYYY = (date: Date): string => {
    return moment(date).format('DD/MM/YYYY');
  };
  DD_MM_YYYY_2 = (date: Date): string => {
    return moment(date).format('DD-MM-YYYY');
  };
  MM = (date: Date): string => {
    return moment(date).format('MMM');
  };
  MM_YY = (date: Date): string => {
    return moment(date).format('MMM-YYYY');
  };
  DD_MMMM_YYYY = (date: Date): string => {
    return moment(date).format('DD MMMM, YYYY');
  };
}

export const dateformatter = new Dateformatter();

// filter array
export const filterData = (
  array: Array<any>,
  searchQuery: string,
): Array<any> => {
  if (!searchQuery || searchQuery.length < 3) {
    return array;
  }
  const filteredData = array?.filter(item => {
    return Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase()),
    );
  });

  return filteredData;
};

// delay helper
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
