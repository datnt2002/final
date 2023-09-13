import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  accessToken: '',
  loading: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logoutAction: (state) => {
      return initialState;
    },
    signInAction: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.loading = false;
      const { user, accessToken } = action.payload;
      state.currentUser = user;
      state.accessToken = accessToken;
    },
    signInFail: (state) => {
      state.loading = false;
    },
    signupAction: (state, action) => {
      state.loading = true;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
    },
    signupFail: (state, action) => {
      state.loading = false;
    },
    forgotPasswordAction: (state, action) => {
      // state.loading = true
    },
    // forgotPasswordSuccess: (state) => {
    //   state.loading = false
    // }
    getCurrentUserAction: (state) => {
      state.loading = true;
      state.currentUser = {};
    },
    getCurrentUserSuccess: (state, action) => {
      state.loading = false;
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      state.currentUser = action.payload;
      state.accessToken = token;
    },
    changePasswordAction: (state) => {
      state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
    },
    uploadAvatarAction: (state) => {
      state.loading = true;
    },
    uploadAvatarSuccess: (state) => {
      state.loading = false;
    },
  },
});

export const {
  logoutAction,
  signInAction,
  signInSuccess,
  signInFail,
  signupAction,
  signupSuccess,
  signupFail,
  forgotPasswordAction,
  getCurrentUserAction,
  getCurrentUserSuccess,
  changePasswordAction,
  changePasswordSuccess,
  uploadAvatarAction,
  uploadAvatarSuccess,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
