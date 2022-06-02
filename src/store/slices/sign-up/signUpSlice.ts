import { createSlice } from '@reduxjs/toolkit'

export interface signInterface {
  email: string;
  password: string;
  token: string;
  isAuth: boolean;
}

const initialState: signInterface = {
  email: '',
  password: '',
  token: '',
  isAuth: false
}

export const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setSession: (state, action: any) => {
      const {payload} = action;
      state = {...payload};
    },

    cleanSession: (state) => {
      state = {...initialState}
    }
  },
})

export const { setSession, cleanSession } = signUpSlice.actions