import {Text, View} from 'react-native';
import ContentTemplate from '../../template/ContentTemplate';
import Friends from '../../component/Contact/Friends';
import FriendRequests from '../../component/Contact/FriendRequests';
import YouMayKnow from '../../component/Contact/YouMayKnow';

export default function Contact() {
  return (
    <ContentTemplate title={'Contact'}>
      <View style={{flex: 1}}>
        <Friends/>
        <FriendRequests/>
        <YouMayKnow/>
      </View>
    </ContentTemplate>
  );
}
