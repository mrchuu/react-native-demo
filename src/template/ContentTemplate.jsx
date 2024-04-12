import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useTheme} from 'react-native-paper';
export default function ContentTemplate({children, title}) {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{flex: 1, padding: 10, backgroundColor: theme.colors.primary}}>
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
                backgroundColor: theme.colors.secondary,
                borderRadius: 100,
              },
            ]}
            onPress={e => {
              navigation.toggleDrawer();
            }}>
            <AntDesignIcons
              name="bars"
              size={20}
              color={theme.colors.textPrimary}
            />
          </Pressable>
        </View>
        <Text
          style={{
            fontSize: 22,
            marginLeft: 10,
            fontWeight: 600,
            color: theme.colors.textPrimary,
          }}>
          {title}
        </Text>
      </View>
      {children}
    </SafeAreaView>
  );
}
