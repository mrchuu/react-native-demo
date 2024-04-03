import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/view/Login';
import Chat from './src/view/content/Chat';
import Story from './src/view/content/Story';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useTheme} from 'react-native-paper';
import Contact from './src/view/content/Contact';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const ContentTabs = () => (
  <Tab.Navigator
    barStyle={{backgroundColor: 'rgb(242, 242, 242)'}}
    shifting={false}
    activeColor="#097BDA">
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="chat" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Contact"
      component={Contact}
      options={{
        tabBarIcon: ({color}) => (
          <AntDesignIcons name="contacts" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Story"
      component={Story}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="web-stories" size={25} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default function App() {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transperent';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Content"
          component={ContentTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
