import { call, fork, take, put } from 'redux-saga/effects';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import {
  changePassword,
  forgotPassword,
  getCurrentUser,
  signIn,
  signUp,
  uploadAvatar,
} from '../../services/auth.service';
import {
  changePasswordAction,
  changePasswordSuccess,
  forgotPasswordAction,
  getCurrentUserAction,
  getCurrentUserFail,
  getCurrentUserSuccess,
  signInAction,
  signInFail,
  signInSuccess,
  signupAction,
  signupFail,
  signupSuccess,
  uploadAvatarAction,
  uploadAvatarSuccess,
} from '../slice/authenticationSlice';
import backdropSweetAlert from '../../assets/imgs/cat-nyan-cat-backdrop.gif';
import { ROLE } from '../../constants/role';
import { ADMIN_ROUTE, PUBLIC_ROUTE, TOKEN } from '../../constants';

function* signInSaga() {
  while (true) {
    try {
      //take payload from form login and call api login
      const {
        payload: { username, password, remember, navigate },
      } = yield take(signInAction);

      //the result is response from api
      //put to store
      const result = yield call(signIn, { username, password });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(signInSuccess(result.data));
          console.log(result.data);
          //store in session for login once
          const authToken = { accessToken: result.data.accessToken, refreshToken: result.data.refreshToken };

          if (remember) {
            localStorage.setItem(TOKEN.AUTH_TOKEN, JSON.stringify(authToken));
          } else {
            sessionStorage.setItem(TOKEN.AUTH_TOKEN, JSON.stringify(authToken));
          }

          if (result.data.user.roles[0].roleName === ROLE.ADMIN) {
            navigate(ADMIN_ROUTE.DASHBOARD);
          } else {
            navigate(PUBLIC_ROUTE.DEFAULT);
          }
          break;
        default:
          yield put(signInFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

//signup have test
function* signUpSaga() {
  while (true) {
    try {
      //destructuring payload
      const {
        payload: { username, password, email, firstName, lastName, navigate },
      } = yield take(signupAction);
      //call api signup
      const result = yield call(signUp, { username, password, email, firstName, lastName });
      console.log(result);

      switch (result.status) {
        case 200:
          Swal.fire({
            title: result.message,
            width: 850,
            padding: '3em',
            color: '#716add',
            background: `#fff `,
            backdrop: `
              rgba(0,0,123,0.4)
              url(${backdropSweetAlert})
              left top
              no-repeat
            `,
            confirmButtonText: 'Got it',
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(PUBLIC_ROUTE.SIGN_IN);
            }
          });
          yield put(signupSuccess(result));
          break;
        case 409:
          yield put(signupFail(result));
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* forgotPasswordSaga() {
  while (true) {
    try {
      const {
        payload: { username, email, navigate },
      } = yield take(forgotPasswordAction);

      const result = yield call(forgotPassword, { username, email });
      console.log(result);
      switch (result.status) {
        case 200:
          Swal.fire({
            title: result.message,
            width: 850,
            padding: '3em',
            color: '#716add',
            background: `#fff `,
            backdrop: `
              rgba(0,0,123,0.4)
              url(${backdropSweetAlert})
              left top
              no-repeat
            `,
            confirmButtonText: 'Got it',
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/signin');
            }
          });
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* getCurrentUserSaga() {
  while (true) {
    try {
      const {
        payload: { accessToken },
      } = yield take(getCurrentUserAction);
      const result = yield call(getCurrentUser, { accessToken });
      switch (result.status) {
        case 200:
          yield put(getCurrentUserSuccess(result.data));
          break;
        default:
          yield put(getCurrentUserFail());
          break;
      }
    } catch (err) {
      console.log(err);
    }
  }
}

function* changePasswordSaga() {
  while (true) {
    try {
      const {
        payload: { oldPassword, newPassword },
      } = yield take(changePasswordAction);
      const { accessToken } =
        JSON.parse(localStorage.getItem(TOKEN.AUTH_TOKEN)) || JSON.parse(sessionStorage.getItem(TOKEN.AUTH_TOKEN));

      const result = yield call(changePassword, { oldPassword, newPassword, accessToken });
      console.log(result);
      switch (result.status) {
        case 200:
          Swal.fire({
            title: result.message,
            width: 850,
            padding: '3em',
            color: '#716add',
            background: `#fff `,
            backdrop: `
              rgba(0,0,123,0.4)
              url(${backdropSweetAlert})
              left top
              no-repeat
            `,
            confirmButtonText: 'Got it',
          });
          yield put(changePasswordSuccess(result));
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* upLoadAvatarSaga() {
  while (true) {
    try {
      const {
        payload: { fileImage },
      } = yield take(uploadAvatarAction);

      const { accessToken } =
        JSON.parse(localStorage.getItem(TOKEN.AUTH_TOKEN)) || JSON.parse(sessionStorage.getItem(TOKEN.AUTH_TOKEN));
      const result = yield call(uploadAvatar, { fileImage, accessToken });
      switch (result.status) {
        case 200:
          yield put(uploadAvatarSuccess(result));
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* authenticationSaga() {
  yield fork(signInSaga);
  yield fork(signUpSaga);
  yield fork(forgotPasswordSaga);
  yield fork(getCurrentUserSaga);
  yield fork(changePasswordSaga);
  yield fork(upLoadAvatarSaga);
}
