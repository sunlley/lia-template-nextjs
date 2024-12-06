import Axios from "axios";
import {CURRENT_CHAIN_ID, TOKENS} from "@/utils/index";

export type RequesterOptions = {
    headers?: any,
    auth?: any
}
const _get = async (url: string, params: any, options?: RequesterOptions) => {
    if (params) {
        let items: string[] = [];
        for (const paramsKey in params) {
            let value = params[paramsKey];
            if (value) {
                let _value = `${paramsKey}=${value}`;
                items.push(_value);
            }
        }
        if (items.length > 0) {
            if (url.indexOf('?') >= 0) {
                if (url.endsWith('&')) {
                    url = url + items.join('&');

                } else {
                    url = url + '&' + items.join('&');

                }
            } else {
                url = url + '?' + items.join('&');
            }
        }
    }
    let config: any = {
        method: 'get',
        maxBodyLength: Infinity,
        timeout: 60000,
        url: url,
        headers: {
            'Content-Type': 'application/json',
        },
        // data: params
    };
    if (options) {
        for (const configKey in options) {
            // @ts-ignore
            config[configKey] = options[configKey];
        }
    }
    let response = await Axios.request(config);
    return response.data;

}
const _post = async (url: string, params: any, options?: RequesterOptions) => {
    let _url = url;
    let config: any = {
        method: 'post',
        maxBodyLength: Infinity,
        timeout: 60000,
        url: _url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: params
    };
    if (options) {
        for (const configKey in options) {
            // @ts-ignore
            config[configKey] = options[configKey];
        }
    }
    let response = await Axios.request(config);
    return response.data;
}
export const request = (method: 'get' | 'post', url: string, params: any, options?: RequesterOptions) => {
    if (method == 'get') {
        return _get(url, params, options);
    }
    return _post(url, params, options);
}

export const HTTP={
    test:()=>{
        return request('get', `/api/test`, {})
    },
}
