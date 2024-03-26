import {Button, Linking, StatusBar, Text, View} from 'react-native';

export default function App() {
  /*hehe*/
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{height: 30, backgroundColor: '#FFA349'}}></View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f23e4d',
        }}>
        <Text style={{color: 'white', fontWeight: '400', fontSize: 20}}>
          Hello world heh
        </Text>
        <View style={{backgroundColor: 'white'}}>
          <Button
            title="pretty nice song"
            onPress={e => {
              Linking.openURL('https://www.youtube.com/watch?v=41B5zvsvQdM');
            }}
          />
        </View>
      </View>
    </View>
  );
}
