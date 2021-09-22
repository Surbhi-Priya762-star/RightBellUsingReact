import { toast } from "react-toastify";

import apiClient from "./api_client";
import { saveAs } from "file-saver";
import axios from "axios";

const loginHelper = (tokens, user) => {
  localStorage.setItem("token", tokens.access.token);
  localStorage.setItem("refresh-token", tokens.refresh.token);
  window.jwt = tokens.access.token;
  localStorage.setItem("user-info", JSON.stringify(user));
};

export const registerUser = async (data = {}) => {
  try {
    let config = {
      method: "post",
      url: "/v1/auth/register",
      data,
    };
    const res = await apiClient(config, "LOGIN");
    const { tokens, user } = res.data;
    loginHelper(tokens, user);
    return user;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.log(error.message);
      alert(error.message);
      return false;
    }
  }
};

export const login = async (data = {}) => {
  try {
    let config = {
      method: "post",
      url: "/v1/auth/login",
      data,
    };
    const res = await apiClient(config, "LOGIN");
    const { tokens, user } = res.data;
    loginHelper(tokens, user);
    return user;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.log(error.message);
      alert(error.message);
      return false;
    }
  }
};

export const getUserInfo = async (userId) => {
  try {
    let config = {
      method: "get",
      url: `/v1/users/${userId}`,
    };
    const res = await apiClient(config, "USER_INFO");
    return res.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      return false;
    }
  }
};

export const manageUserInfo = async (userId, data) => {
  try {
    let config = {
      method: "patch",
      url: `/v1/users/${userId}`,
    };
    const res = await apiClient(config, "UPDATE_USER_INFO");
    localStorage.setItem("user-info", JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      return false;
    }
  }
};

export const logoutAPI = async () => {
  try {
    let config = {
      method: "post",
      url: "/v1/auth/logout",
      data: {
        refreshToken: localStorage.getItem("refresh-token"),
      },
    };
    await apiClient(config, "LOGOUT_USER_INFO");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh-token");
    window.jwt = null;
    localStorage.removeItem("user-info");
    window.location.href = "/";
    return true;
  } catch (error) {
    if (!axios.isCancel(error)) {
      return false;
    }
  }
};

export const sendVerificationEmail = () =>
  apiClient.exec({
    method: "POST",
    headers: {
      Authorization: `Bearer ${
        window.jwt ? window.jwt : localStorage.getItem("token")
      }`,
    },
    url: "/v1/auth/send-verification-email",
    onSuccess: (s) => {
      console.log(s);
      toast.success("Email sent successfully !");

      return true;
    },
    onFailure: ({ message }) => {
      console.log(message);
      alert(message);
      return false;
    },
  });

export const verifyEmailAPI = (token) =>
  apiClient.exec({
    method: "POST",
    headers: {
      Authorization: `Bearer ${
        window.jwt ? window.jwt : localStorage.getItem("token")
      }`,
    },
    url: `/v1/auth/verify-email?token=${token}`,
    onSuccess: (s) => {
      console.log(s);
      toast.success("Token Validated Successfully");

      return true;
    },
    onFailure: ({ message }) => {
      alert("Token " + message);
      return false;
    },
  });

export const sendVerificationOTP = () =>
  apiClient.exec({
    method: "POST",
    headers: {
      Authorization: `Bearer ${
        window.jwt ? window.jwt : localStorage.getItem("token")
      }`,
    },
    url: "/v1/auth/send-verification-otp",
    onSuccess: (s) => {
      console.log(s);
      toast.success("OTP sent successfully !");

      return true;
    },
    onFailure: ({ message }) => {
      console.log(message);
      alert(message);
      return false;
    },
  });

export const verifyOtpAPI = (otp) =>
  apiClient.exec({
    method: "POST",
    headers: {
      Authorization: `Bearer ${
        window.jwt ? window.jwt : localStorage.getItem("token")
      }`,
    },
    url: `/v1/auth/verify-mobile?otp=${otp}`,
    onSuccess: (s) => {
      console.log(s);
      toast.success("Token Validated Successfully");

      return true;
    },
    onFailure: ({ message }) => {
      alert("Token " + message);
      return false;
    },
  });

export const generateResume = (userId, data) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${
    window.jwt ? window.jwt : localStorage.getItem("token")
  }`;
  axios
    .post(
      `http://ec2-3-108-251-176.ap-south-1.compute.amazonaws.com:3000/v1/users/resume/${userId}`,
      data
    )
    .then(() => {
      setTimeout(() => {
        // _________
        axios
          .get(
            `http://ec2-3-108-251-176.ap-south-1.compute.amazonaws.com:3000/v1/users/resume/${userId}`,
            { responseType: "blob" }
          )
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });

            saveAs(pdfBlob, `${data.name.replace(" ", "_")}_Resume.pdf`);
          });
        // _____
      }, 2000);
    });
};

export const sendForgotPassEmail = (email) =>
  apiClient.exec({
    method: "POST",
    // headers: { Authorization: `Bearer ${window.jwt ? window.jwt : localStorage.getItem('token')}` },
    url: "/v1/auth/forgot-password",
    data: {
      email: email,
    },
    onSuccess: (s) => {
      console.log(s);
      toast.success("Please Check your email !");

      return true;
    },
    onFailure: ({ message }) => {
      console.log(message);
      alert(message);

      return false;
    },
  });

export const resetPassToken = (token, pass) =>
  apiClient.exec({
    method: "POST",
    // headers: { Authorization: `Bearer ${window.jwt ? window.jwt : localStorage.getItem('token')}` },
    url: `/v1/auth/reset-password?token=${token}`,
    data: {
      password: pass,
    },
    onSuccess: (s) => {
      console.log(s);
      toast.success("Password set Successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

      return true;
    },
    onFailure: ({ message }) => {
      alert(message);
      return false;
    },
  });
