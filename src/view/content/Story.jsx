import {Text, View} from 'react-native';
import ContentTemplate from '../../template/ContentTemplate';

export default function Story() {
  return (
    <ContentTemplate title={'Contact'}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Story</Text>
      </View>
    </ContentTemplate>
  );
}
