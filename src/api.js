import { toast } from 'react-toastify';

import ApiClient from './api_client';
import { saveAs } from 'file-saver';
import axios from 'axios';

const loginHelper = (tokens, user) => {
    localStorage.setItem('friday-session-token', tokens.access.token);
    localStorage.setItem('friday-refresh-token', tokens.refresh.token);

    window.jwt = tokens.access.token;
    console.log(tokens);
    localStorage.setItem('friday-user-info', JSON.stringify(user));
}

export const registerUser = (data = {}) => ApiClient.exec({
    method: 'POST',
    url: '/auth/register',
    data,
    onSuccess: (data) => {
        loginHelper(data.tokens, data.user);
        window.location.href = '/';
        return data;
    },
    onFailure: ({ message }) => {
        console.log(message);
        alert(message);
        return false;
    },
});


export const login = (data = {}) => ApiClient.exec({
    method: 'POST',
    url: '/auth/login',
    data,
    onSuccess: ({ tokens, user }) => {
        loginHelper(tokens, user);
        return user;
    },
    onFailure: ({ message }) => {
        console.log(message);
        alert(message);
        return false;
    },
});


export const getUserInfo = (userId) => ApiClient.exec({
    method: 'GET',
    url: `/users/${userId}`,
    headers: { Authorization: `Bearer ${window.jwt ? window.jwt : localStorage.getItem('friday-session-token')}` },
    onSuccess: (data) => {
        return data;
    },
    onFailure: ({ message }) => {
        console.log(message);
        alert(message);
        return false;
    },
});


export const manageUserInfo = (userId, data) => ApiClient.exec({
    method: 'PATCH',
    url: `/users/${userId}`,
    data,
    headers: { Authorization: `Bearer ${window.jwt ? window.jwt : localStorage.getItem('friday-session-token')}` },
    onSuccess: (data) => {
        localStorage.setItem('friday-user-info', JSON.stringify(data));

        return data;
    },
    onFailure: ({ message }) => {
        console.log(message);
        alert(message);
        return false;
    },
});





export const logoutAPI = () => ApiClient.exec({
    method: 'POST',
    headers: { Authorization: `Bearer ${window.jwt ? window.jwt : localStorage.getItem('friday-session-token')}` },
    url: '/auth/logout',
    data: {
        refreshToken: localStorage.getItem('friday-refresh-token'),
    },
    onSuccess: (s) => {
        console.log(s);
        localStorage.removeItem('friday-session-token');
        localStorage.removeItem('friday-refresh-token');

        window.jwt = null;
        localStorage.removeItem('friday-user-info');
        window.location.href = '/';
        return true;
    },
    onFailure: ({ message }) => {
        console.log(message);
        alert(message);
        return false;
    },
});


export const sendVerificationEmail = () => ApiClient.exec({
    method: 'POST',
    headers: { Authorization: `Bearer ${window.jwt ? window.jwt : localStorage.getItem('friday-session-token')}` },
    url: '/auth/send-verification-email',
    onSuccess: (s) => {
        console.log(s);
        toast.success('Email sent successfully !');


        return true;
    },
    onFailure: ({ message }) => {
        console.log(message);
        alert(message);
        return false;
    },
});


export const verifyEmailAPI = (token) => ApiClient.exec({
    method: 'POST',
    headers: { Authorization: `Bearer ${window.jwt ? window.jwt : localStorage.getItem('friday-session-token')}` },
    url: `/auth/verify-email?token=${token}`,
    onSuccess: (s) => {
        console.log(s);
        toast.success('Token Validated Successfully');

        return true;
    },
    onFailure: ({ message }) => {
        alert('Token ' + message);
        return false;
    },
});

export const sendVerificationOTP = () => ApiClient.exec({
    method: 'POST',
    headers: { Authorization: `Bearer ${window.jwt ? window.jwt : localStorage.getItem('friday-session-token')}` },
    url: '/auth/send-verification-otp',
    onSuccess: (s) => {
        console.log(s);
        toast.success('OTP sent successfully !');

        return true;
    },
    onFailure: ({ message }) => {
        console.log(message);
        alert(message);
        return false;
    },
});


export const verifyOtpAPI = (otp) => ApiClient.exec({
    method: 'POST',
    headers: { Authorization: `Bearer ${window.jwt ? window.jwt : localStorage.getItem('friday-session-token')}` },
    url: `/auth/verify-mobile?otp=${otp}`,
    onSuccess: (s) => {
        console.log(s);
        toast.success('Token Validated Successfully');

        return true;
    },
    onFailure: ({ message }) => {
        alert('Token ' + message);
        return false;
    },
});

export const generateResume = (userId, data) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${window.jwt ? window.jwt : localStorage.getItem('friday-session-token')}`;
    axios.post(`http://ec2-3-108-251-176.ap-south-1.compute.amazonaws.com:3000/v1/users/resume/${userId}`, data)
        .then(() => {
            setTimeout(() => {
                // _________
                axios.get(`http://ec2-3-108-251-176.ap-south-1.compute.amazonaws.com:3000/v1/users/resume/${userId}`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                        saveAs(pdfBlob, `${data.name.replace(' ', '_')}_Resume.pdf`);
                    })
                // _____
            }, 2000);
        });
};




export const sendForgotPassEmail = (email) => ApiClient.exec({
    method: 'POST',
    // headers: { Authorization: `Bearer ${window.jwt ? window.jwt : localStorage.getItem('friday-session-token')}` },
    url: '/auth/forgot-password',
    data: {
        email: email
    },
    onSuccess: (s) => {
        console.log(s);
        toast.success('Please Check your email !');

        return true;
    },
    onFailure: ({ message }) => {
        console.log(message);
        alert(message);

        return false;
    },
});


export const resetPassToken = (token, pass) => ApiClient.exec({
    method: 'POST',
    // headers: { Authorization: `Bearer ${window.jwt ? window.jwt : localStorage.getItem('friday-session-token')}` },
    url: `/auth/reset-password?token=${token}`,
    data: {
        password: pass
    },
    onSuccess: (s) => {
        console.log(s);
        toast.success('Password set Successfully');
        setTimeout(() => {
            window.location.href = '/';

        }, 1000);

        return true;
    },
    onFailure: ({ message }) => {
        alert(message);
        return false;
    },
});