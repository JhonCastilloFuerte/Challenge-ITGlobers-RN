import { createSlice } from '@reduxjs/toolkit'

export interface resourceState {
  page: number;
  resources: [];
  isLoading: boolean;
  pages: number;
}

const initialState: resourceState = {
  page: 1,
  resources: [],
  isLoading: false,
  pages: 0
}

export const ResourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true
    },

    setResources: (state, action: any) => {
      const {payload} = action;
      state.page = payload.page;
      state.isLoading = false;
      state.resources = payload.data;
      state.pages = payload.total_pages;
    }
  },
})

export const { startLoading, setResources } = ResourcesSlice.actions