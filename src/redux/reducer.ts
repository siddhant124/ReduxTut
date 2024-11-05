import {Product} from '../type/ProductType';
import {ADD_ITEM, REMOVE_ITEM} from './constant';

export const cartReducer = (state: Product[] = [], action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];

    case REMOVE_ITEM:
      return state.filter((item: Product) => item.id !== action.payload);

    default:
      return state;
  }
};
