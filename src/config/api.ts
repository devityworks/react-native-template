import HttpClient from 'utils/HttpClient';
import {AxiosResponse, AxiosRequestConfig} from 'axios';
import Storage from 'utils/StorageProvider';

export const BASE_URL = 'http://localhost'; //YOUR_API_URL
export const AUTH_TOKEN_NAME = 'token'; //'YOUR_AUTH_TOKEN_NAME';
export const JWT_TOKEN_PREFIX = 'Bearer'; // JWT_TOKEN_PREFIX';

class Api extends HttpClient {
  private static instance: Api;
  private readonly storage = Storage.getInstance();

  private constructor() {
    super(BASE_URL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  // Make sure only one instace is created
  public static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }

    return Api.instance;
  }

  // Extracting data property from response
  private _handleResponse = ({data}: AxiosResponse) => data;
  protected _handleError = (error: any) => Promise.reject(error);

  private _initializeResponseInterceptor = () => {
    this.http.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _initializeRequestInterceptor = () => {
    this.http.interceptors.request.use(this._handleRequest, this._handleError);
  };

  private _handleRequest = async (config: AxiosRequestConfig) => {
    const token = await this.storage.getItem(AUTH_TOKEN_NAME);
    if (token) {
      config.headers.Authorization = `${JWT_TOKEN_PREFIX} ${token}`;
    }
    return config;
  };

  get post() {
    return this.http.post;
  }

  get delete() {
    return this.http.delete;
  }

  get put() {
    return this.http.put;
  }

  get get() {
    return this.http.get;
  }

  get patch() {
    return this.http.patch;
  }
}

export default Api;
