export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";

interface ApiRequest {
    method: 'GET' | 'POST';
    url: string;
    body: any; // we are not sending body to the Giphy api
    feature: string; // this is a feature tag - useful when debuging thru Redux dev tools
} 

export const apiRequest = ({ method, url, body, feature }: ApiRequest) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, url, feature }
});

export const apiSuccess = (data: {}, feature: string) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: data,
  meta: { feature }
});

export const apiError = (error: string, feature: string) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature }
});
