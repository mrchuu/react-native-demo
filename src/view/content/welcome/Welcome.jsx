import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, Text, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        alignItems: 'center',
        backgroundColor: '#E3E0CA',
      }}>
      <Image
        style={{width: '90%', height: 330}}
        source={require('../../../assets/beaver(1).png')}
      />
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 900,
            color: '#594032',
          }}>
          Hello
        </Text>
        <Text style={{textAlign: 'center', fontSize: 15, color: '#594032'}}>
          Welcome to BeaverEdu. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.Curabitur pharetra.
        </Text>
      </View>
      <View style={{}}>
        <Pressable
          style={{
            paddingHorizontal: 100,
            borderRadius: 50,
            paddingVertical: 18,
            backgroundColor: '#594032',
            marginTop: 20,
          }}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{color: 'white'}}>Sign In</Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 100,
            borderRadius: 50,
            paddingVertical: 18,
            marginTop: 10,
            borderWidth: 2,
            borderColor: '#594032',
          }}>
          <Text style={{color: '#594032'}}>Sign Up</Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: '#594032',
          height: 1,
          width: 250,
          marginVertical: 15,
        }}></View>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'black'}}>or start with</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <AntDesignIcon
            color={'#594032'}
            name="google"
            size={25}
            style={{
              borderWidth: 1,
              borderColor: '#594032',
              borderRadius: 10,
              padding: 7,
              marginRight: 5
            }}
          />
          <EvilIcon
            color={'#594032'}
            name="sc-facebook"
            size={30}
            style={{
              borderWidth: 1,
              borderColor: '#594032',
              borderRadius: 10,
              padding: 5,
            }}
          />
          
        </View>
      </View>
    </View>
  );
}
