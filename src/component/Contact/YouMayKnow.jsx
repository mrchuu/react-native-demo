import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

export default function YouMayKnow() {
  const theme = useTheme();
  return (
    <View>
      <Text
        style={{
          color: theme.colors.textPrimary,
          fontSize: 18,
          fontWeight: '500',
        }}>
        You May Know
      </Text>
    </View>
  );
}
