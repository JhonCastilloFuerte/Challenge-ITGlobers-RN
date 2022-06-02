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
      console.log('initial state: ',state)
      state = {...payload};
      console.log('state: ',state)
    },

    cleanSession: (state) => {
      state = {...initialState}
    }
  },
})

export const { setSession, cleanSession } = signUpSlice.actions