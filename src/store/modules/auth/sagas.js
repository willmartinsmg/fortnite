import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import fire from '~/services/fire';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    fire.auth().signInWithEmailAndPassword(email, password);
    /* .catch(function(error) {
        console.tron.log('error catch', error);
      }); */

    const token = fire.auth().accessToken;
    const user = fire.auth().uid;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autentição, verifique seus dados');
    // console.tron.log('error catch', err);
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { email, password } = payload;

    fire.auth().createUserWithEmailAndPassword(email, password);
    /* .catch(function(error) {
        console.tron.log('error code', error.code);
        console.tron.log('error message', error.message);
      }); */

    // yield call(api.post, 'users', {
    //   name,
    //   email,
    //   password,
    //   password_confirmation,
    // });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');
    // console.tron.log('error', err);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
