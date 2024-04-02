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
export default function Chat() {
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      // backgroundColor: "red"
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
  const pressHandler = () =>{
    
  }
  return (
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: 400,
        }}>
        <View>
          <Pressable
            style={{
              backgroundColor: 'rgb(51, 138, 232)',
              paddingHorizontal: 15,
              paddingVertical: 8,
              borderRadius: 6,
            }}
            onPress={e => {
              setShowModal(true);
            }}>
            <Text style={{color: 'white'}}>Click here</Text>
          </Pressable>
        </View>
      </View>
      <Toast />
    </View>
  );
}
