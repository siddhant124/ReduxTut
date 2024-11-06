import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
