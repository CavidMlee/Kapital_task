import axios from 'axios';

// declare module 'axios' {
//     export interface AxiosResponse<T = any> extends Promise<T> {}
//   }


const headers: any = { 'content-type': 'application/json' };
const baseURL: string = 'http://localhost:4000/';


const client = (endpoint: string, { body, ...customConfig }: any = {}) => {

    const config = {
        baseURL,
        url: endpoint,
        data: body,
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };

    return axios.request(config).then(res =>console.log(res?.data) );
}

export default client;