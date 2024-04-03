import {Pressable, Text, View} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
export default function ContentTemplate({children, title}) {
  return (
    <View style={{flex: 1, padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
        //   backgroundColor: 'red',
        }}>
        <View
          style={{
            width: 42,
            height: 42,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            style={({pressed}) => [
              {
                padding: pressed ? 10 : 8, // Increase padding when pressed
                backgroundColor: pressed
                  ? 'rgb(214, 214, 214)'
                  : 'rgb(226, 226, 226)',
                borderRadius: 100,
              },
            ]}
            onPress={e => {
              console.log('hehe');
            }}>
            <AntDesignIcons name="bars" size={20} />
          </Pressable>
        </View>
        <Text style={{fontSize: 22, marginLeft: 10, fontWeight: 600}}>
          {title}
        </Text>
      </View>
      {children}
    </View>
  );
}
