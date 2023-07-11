import axiosClient from './api.service';

export const signIn = (data) => {
  return axiosClient
    .post('users/auth/login', data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
};

export const signUp = (data) => {
  return axiosClient
    .post('users/auth/register', data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const forgotPassword = (data) => {
  return axiosClient
    .post('users/forgotpassword', data)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      return error;
    });
};
