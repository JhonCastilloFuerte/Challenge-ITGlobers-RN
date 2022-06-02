import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/authSlice'
import { signUpSlice } from './slices/sign-up/signUpSlice';
import { ResourcesSlice } from './slices/pagination/resourcesSlice';

const store = configureStore({
  reducer: {
    session : authSlice.reducer,
    signUp : signUpSlice.reducer,
    resources: ResourcesSlice.reducer
  },
})

export default store

export {store}