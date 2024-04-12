import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export default function ActiveContacts() {
  const data = [
    {
      _id: 1,
      avatar:
        'https://static.wikia.nocookie.net/aurora-aksnes/images/9/91/Photo_by_Xin_Li-10.jpg/revision/latest?cb=20230528190050',
      name: 'Aurora',
    },
    {
      _id: 2,
      avatar:
        'https://static.wikia.nocookie.net/aurora-aksnes/images/9/91/Photo_by_Xin_Li-10.jpg/revision/latest?cb=20230528190050',
      name: 'Aurora',
    },
    {
      _id: 3,
      avatar:
        'https://static.wikia.nocookie.net/aurora-aksnes/images/9/91/Photo_by_Xin_Li-10.jpg/revision/latest?cb=20230528190050',
      name: 'Aurora',
    },
    {
      _id: 4,
      avatar:
        'https://static.wikia.nocookie.net/aurora-aksnes/images/9/91/Photo_by_Xin_Li-10.jpg/revision/latest?cb=20230528190050',
      name: 'Aurora',
    },
    {
      _id: 5,
      avatar:
        'https://static.wikia.nocookie.net/aurora-aksnes/images/9/91/Photo_by_Xin_Li-10.jpg/revision/latest?cb=20230528190050',
      name: 'Aurora',
    },
    {
      _id: 6,
      avatar:
        'https://static.wikia.nocookie.net/aurora-aksnes/images/9/91/Photo_by_Xin_Li-10.jpg/revision/latest?cb=20230528190050',
      name: 'Aurora',
    },
    {
      _id: 7,
      avatar:
        'https://static.wikia.nocookie.net/aurora-aksnes/images/9/91/Photo_by_Xin_Li-10.jpg/revision/latest?cb=20230528190050',
      name: 'Aurora',
    },
    {
      _id: 8,
      avatar:
        'https://static.wikia.nocookie.net/aurora-aksnes/images/9/91/Photo_by_Xin_Li-10.jpg/revision/latest?cb=20230528190050',
      name: 'Aurora',
    },
    {
      _id: 9,
      avatar:
        'https://static.wikia.nocookie.net/aurora-aksnes/images/9/91/Photo_by_Xin_Li-10.jpg/revision/latest?cb=20230528190050',
      name: 'Aurora',
    },
  ];
  const theme = useTheme();
  const styles = StyleSheet.create({
    activeContacts: {
      paddingVertical: 15,
    },
    contact: {
      marginHorizontal: 10,
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      width: 70,
      height: 70,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: theme.colors.active,
    },
    name: {
      color: theme.colors.textSecondary,
      marginTop: 5,
    },
  });
  return (
    <ScrollView style={styles.activeContacts} horizontal>
      <View style={styles.contact}>
        <Pressable
          onPress={e => {
            console.log(contact._id);
          }}
          style={{
            width: 70,
            height: 70,
            backgroundColor: theme.colors.secondary,
            borderRadius: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesignIcons
            style={{
              color: theme.colors.textPrimary,
            }}
            size={30}
            name={'plus'}
          />
        </Pressable>

        <Text style={styles.name}>Add Story</Text>
      </View>
      {data.map(contact => (
        <View style={styles.contact} key={contact._id}>
          <Pressable
            onPress={e => {
              console.log(contact._id);
            }}>
            <Image src={contact.avatar} style={styles.avatar} />
          </Pressable>

          <Text style={styles.name}>{contact.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
