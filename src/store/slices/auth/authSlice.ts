import { createSlice } from '@reduxjs/toolkit'

export interface authState {
  email: string;
  password: string;
  token: string;
  isAuth: boolean;
}

const initialState: authState = {
  email: '',
  password: '',
  token: '',
  isAuth: false
}

export const authSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action: any) => {
      const {payload} = action;
      state.email = payload.email;
      state.password = payload.password;
      state.token = payload.token;
      state.isAuth = payload.isAuth;
    },

    closeSession: (state) => {
      state.email = '';
      state.password = '';
      state.token = '';
      state.isAuth = false;
    },
  },
})

export const { setSession, closeSession } = authSlice.actions