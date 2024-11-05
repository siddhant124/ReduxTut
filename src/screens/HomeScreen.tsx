/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Product} from '../type/ProductType';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, removeItemFromCart} from '../redux/action';
import {RootState} from '../redux/store';

export default function HomeScreen({navigation}: {navigation: any}) {
  const [prodData, setProdData] = useState<Product[]>([]);
  const dispatch = useDispatch();

  const prodCartData = useSelector((state: RootState) => state);

  const addItem = (item: Product) => {
    dispatch(addItemToCart(item));
    console.log('first', item);
  };

  const removeItem = (indexId: any) => {
    dispatch(removeItemFromCart(indexId));
  };

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProdData(json);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <Text>Bag Count: </Text>
            <Text>{prodCartData.length}</Text>
          </View>
        </TouchableOpacity>
        <FlatList
          data={prodData}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.description} numberOfLines={1}>
                  ${item.price.toFixed(2)}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    prodCartData.some(cartItem => cartItem.id === item.id)
                      ? removeItem(item.id)
                      : addItem(item)
                  }
                  style={{
                    backgroundColor: 'pink',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 5,
                    alignSelf: 'flex-end', // Wraps width to content
                  }}>
                  <Text>
                    {prodCartData.some(cartItem => cartItem.id === item.id)
                      ? 'Remove from cart'
                      : 'Add to cart'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  innerContainer: {
    flex: 1,
    margin: 24,
    backgroundColor: '#FFF',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
