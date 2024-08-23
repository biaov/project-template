import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    token: ''
  },
  reducers: {
    login: state => {
      state.token = 'token'
    },
    logout: state => {
      state.token = ''
    }
  }
})
