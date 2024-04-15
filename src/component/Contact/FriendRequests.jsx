import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

export default function FriendRequests() {
  const theme = useTheme();
  return (
    <View>
      <Text
        style={{
          color: theme.colors.textPrimary,
          fontSize: 18,
          fontWeight: '500',
        }}>
        Friend Requests
      </Text>
    </View>
  );
}
