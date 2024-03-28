import {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Linking,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('Chu Son');
  const [items, setItems] = useState([
    {
      key: 1,
      image: 'https://i.ytimg.com/vi/-P2b0cDVJiY/maxresdefault.jpg',
      value: 'Item 1',
    },
    {
      key: 2,
      image: 'https://i.ytimg.com/vi/-P2b0cDVJiY/maxresdefault.jpg',
      value: 'Item 2',
    },
    {
      key: 3,
      image: 'https://i.ytimg.com/vi/-P2b0cDVJiY/maxresdefault.jpg',
      value: 'Item 3',
    },
    {
      key: 4,
      image: 'https://i.ytimg.com/vi/-P2b0cDVJiY/maxresdefault.jpg',
      value: 'Item 4',
    },
    {
      key: 5,
      image: 'https://i.ytimg.com/vi/-P2b0cDVJiY/maxresdefault.jpg',
      value: 'Item 5',
    },
    {
      key: 6,
      image: 'https://i.ytimg.com/vi/-P2b0cDVJiY/maxresdefault.jpg',
      value: 'Item 6',
    },
    {
      key: 7,
      image: 'https://i.ytimg.com/vi/-P2b0cDVJiY/maxresdefault.jpg',
      value: 'Item 7',
    },
    {
      key: 8,
      image: 'https://i.ytimg.com/vi/-P2b0cDVJiY/maxresdefault.jpg',
      value: 'Item 8',
    },
    {
      key: 9,
      image: 'https://i.ytimg.com/vi/-P2b0cDVJiY/maxresdefault.jpg',
      value: 'Item 9',
    },
    {
      key: 10,
      image: 'https://i.ytimg.com/vi/-P2b0cDVJiY/maxresdefault.jpg',
      value: 'Item 10',
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([
      ...items,
      {
        key: 111,
        image:
          'https://product.hstatic.net/1000304920/product/the-weeknd-dawn-fm-phien-ban-co-chu-ky-dia-cd_685b909311df4ecfbe0c9923b275a8d3.jpeg',
        value: 'Item 111',
      },
    ]);
    setRefreshing(false);
  };
  const styles = StyleSheet.create({
    body: {
      padding: 10,
    },
  });

  return (
    <View style={styles.body}>
      <FlatList
      numColumns={2}
        data={items}
        renderItem={({item, index}) => (
          <View
            key={index}
            style={{
              backgroundColor: '#97E7E1',
              height: 240,
              width: '48%',
              marginHorizontal: 4,
              marginBottom: 8,
            }}></View>
        )}
      />
    </View>
  );
}
