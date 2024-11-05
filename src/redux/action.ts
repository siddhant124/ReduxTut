import {Product} from '../type/ProductType';
import {ADD_ITEM, REMOVE_ITEM} from './constant';

export const addItemToCart = (data: Product) => ({
  type: ADD_ITEM,
  payload: data,
});

export const removeItemFromCart = (index: any) => ({
  type: REMOVE_ITEM,
  payload: index,
});
