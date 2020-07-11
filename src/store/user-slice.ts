import { createSlice } from '@reduxjs/toolkit'
import { Currency } from '../constants'

export interface User {
  currency: string;
}

type UserState = {
  user: {
    value: User;
  };
}

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      currency: Currency.dollar
    }
  },
  reducers: {
    changeCurrency: (state, action) => {
      state.value.currency = action.payload
    }
  }
})

export const { changeCurrency } = UserSlice.actions

export const selectorUser = (state: UserState) => state.user.value

export default UserSlice.reducer