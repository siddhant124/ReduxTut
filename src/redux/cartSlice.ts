import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../type/ProductType';

const initialState: Product[] = [];
const cartSlice = createSlice({
  name: 'CartScreen',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.push(action.payload);
    },

    removeItemFromCart(state, action) {
      return state.filter((item: Product) => item.id !== action.payload);
    },
  },
});

export const {addItemToCart, removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;
