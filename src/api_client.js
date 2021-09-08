import React from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

export class ApiClient {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://ec2-3-108-251-176.ap-south-1.compute.amazonaws.com:3000/v1/',
        });
    }


    exec = async ({
        url,
        method = 'GET',
        headers = {},
        params = {},
        data = {},
        onFailure,
        onSuccess,
    }) => {
        var rawRes;
        try {
            rawRes = await this.api.request({
                method,
                url,
                headers: {
                    // Authorization: `Bearer ${window.jwt}`,
                    'Access-Control-Allow-Origin': '*',
                    ...headers,
                },
                params,
                data,
            });
            // if (method === 'DELETE') {
            //     return onSuccess(true, {});
            // }
            console.log(rawRes);
            return onSuccess(rawRes.data);
        } catch (e) {
            console.log(e.request);
            if (e.response.data.code === 401 && !e.request.responseURL.includes('/login')) {
                localStorage.removeItem('friday-session-token');
                localStorage.removeItem('friday-refresh-token');

                window.jwt = null;
                localStorage.removeItem('friday-user-info');
                window.location.href = '/';
                return;
            }

            // alert(e.response.data.message);
            return onFailure({ data: false, message: e.response.data.message });

        }
    };

    get = ({ url, params, onFailure,
        onSuccess }) => this.exec({
            method: 'GET', url, params, onFailure,
            onSuccess
        });

    post = ({
        url, data, headers, onFailure, onSuccess
    }) => this.exec({
        method: 'POST',
        url,
        data,
        headers,
        onFailure,
        onSuccess
    });

    put = ({ url, data, headers }) => this.exec({
        method: 'PUT',
        url,
        data,
        headers,
    });


}

export default new ApiClient();

