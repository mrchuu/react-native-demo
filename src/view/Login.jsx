import {ImageBackground, Pressable, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/cassette-wall-art.webp')}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
        }}
      />

      {/* Content */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 4}}></View>
          <View style={{flex: 2}}>
            <Pressable
              style={{
                backgroundColor: 'rgb(51, 138, 232)',
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 6,
              }}
              onPress={() => {
                navigation.navigate('Main');

              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
            </Pressable>
          </View>
          <View style={{flex: 4}}></View>
        </View>
      </View>
    </ImageBackground>
  );
}
