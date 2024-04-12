import {useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  FlatList,
  Image,
  Linking,
  Pressable,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import Modal from 'react-native-modal';
import ContentTemplate from '../../template/ContentTemplate';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useTheme} from 'react-native-paper';
import ActiveContacts from '../../component/Chat/ActiveContacts';
export default function Chat() {
  const theme = useTheme();
  const styles = StyleSheet.create({
    body: {
      flex: 1,
    },
    searchSection: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.secondary,
      height: 40,
      borderWidth: 1,
      borderColor: theme.colors.secondary,
      borderRadius: 20,
      marginTop: 5,
    },
    searchIcon: {
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    input: {
      width: '90%',
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      color: theme.colors.textSecondary,
    },
    activeContact: {
      // backgroundColor: "blue"
    },
  });
  const showAlert = () => {
    Alert.alert(
      'Wut da hell',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisi odio, ultricies at vestibulum vel, semper finibus quam. Suspendisse porta molestie tempor. Maecenas mattis urna ac magna aliquet, a interdum mi aliquet. ',
      [
        {
          text: 'Do not show again',
          onPress: () => {
            Toast.show({
              type: 'info',
              text1: 'Huhu',
              text2: 'We will not bother you further more 😥',
              visibilityTime: 2000,
            });
          },
        },
        {
          text: 'Cancel',
          onPress: () => {
            Toast.show({
              type: 'error',
              text1: 'Transaction canceled',
              text2: '👺',
              visibilityTime: 2000,
            });
          },
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => {
            Toast.show({
              type: 'success',
              text1: 'Hello',
              text2: 'This is some something 👋',
              visibilityTime: 2000,
            });
          },
        },
      ],
    );
  };
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const pressHandler = () => {};
  return (
    <ContentTemplate title={'Chat'}>
      <View style={styles.body}>
        <Modal
          isVisible={showModal}
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionOutTiming={700}
          style={{paddingTop: 50, margin: 0}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              margin: 0,
              paddingTop: 20,
            }}>
            <Text>Hello!</Text>

            <Button
              title="Hide modal"
              onPress={e => {
                setShowModal(false);
              }}
            />
          </View>
        </Modal>
        <View style={{flex: 1}}>
          <View style={styles.searchSection}>
            <AntDesignIcon
              style={styles.searchIcon}
              name="search1"
              size={20}
              color={theme.colors.textPrimary}
            />
            <TextInput
              style={styles.input}
              placeholder="Search"
              onChangeText={searchString => {
                setSearchInput(searchString);
              }}
              value={searchInput}
              placeholderTextColor={theme.colors.textSecondary}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.activeContact}>
            <ActiveContacts />
          </View>
          <View style={{flex: 1, paddingTop: 10}}></View>
        </View>
        <Toast />
      </View>
    </ContentTemplate>
  );
}
