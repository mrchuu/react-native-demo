import {useState} from 'react';
import {
  Button,
  Image,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('Chu Son');
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: 'column',
      // backgroundColor: '#80e5c2',
      padding: 10,
    },
  });
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
  return (
    <View style={styles.body}>
      <View
        style={{
          flex: 1.3,
          borderRadius: 10,
          // backgroundColor: 'rgb(107, 136, 239)',
          padding: 10,
          borderWidth: 1,
          alignContent: "center"
        }}>
        <ScrollView horizontal>
          {items.map((i, index) => (
            <View
              key={i.key}
              style={{
                backgroundColor: 'rgba(232, 232, 232, 0.5)',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  paddingVertical: 5,
                  justifyContent: "space-between"
                }}>
                <View style={{backgroundColor: "red", width: 110, height: "100%", marginHorizontal: 3}}>
                  <Image
                    src={i.image}
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: 'cover',
                      borderRadius: 5,
                      marginRight: 10,
                    }}
                  />
                  <View style={{flex: 1, minHeight: '100%'}}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '500',
                        color: 'black',
                        paddingLeft: 2,
                      }}>
                      {i.value}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{flex: 5.7}}></View>
    </View>
  );
}
