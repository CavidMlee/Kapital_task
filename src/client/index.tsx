import axios from 'axios';


const headers: any = { 'content-type': 'application/json' };
const baseURL: string = 'http://localhost:4000/';


const client = (endpoint: string, body?: any, { ...customConfig }: any = {}) => {

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

    return axios.request(config).then(res => res?.data)
}

export default client;
