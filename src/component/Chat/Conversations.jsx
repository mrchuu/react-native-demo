import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

export default function Conversation() {
  const data = [
    {
      _id: 1,
      name: 'Aurora',
      avatar:
        'https://static.wikia.nocookie.net/aurora-aksnes/images/9/91/Photo_by_Xin_Li-10.jpg/revision/latest?cb=20230528190050',
      latestMessage:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui eget metus sodales ultricies quis ut purus. Aliquam erat volutpat.',
    },
    {
      _id: 2,
      name: 'The Weeknd',
      avatar:
        'https://yt3.googleusercontent.com/QiI-c4cFyRPD0qVwTQooC3dlgJqHA_t6CpEAv818om-mqL9bqNDL4L_qXQVXx_eY76D_7cLD=s900-c-k-c0x00ffffff-no-rj',
      latestMessage:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui eget metus sodales ultricies quis ut purus. Aliquam erat volutpat.',
    },
    {
      _id: 3,
      name: 'Chris Christodoulou',
      avatar:
        'https://i.scdn.co/image/ab676161000051746edac9e3be9f40808d66dc55',
      latestMessage:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui eget metus sodales ultricies quis ut purus. Aliquam erat volutpat.',
    },
    {
      _id: 4,
      name: 'Billie Eilish',
      avatar: 'https://i.ytimg.com/vi/pbMwTqkKSps/maxresdefault.jpg',
      latestMessage:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui eget metus sodales ultricies quis ut purus. Aliquam erat volutpat.',
    },
    {
      _id: 5,
      name: 'Artic Monkey',
      avatar:
        'https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f',
      latestMessage:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui eget metus sodales ultricies quis ut purus. Aliquam erat volutpat.',
    },
    {
      _id: 6,
      name: 'Nf',
      avatar:
        'https://i.scdn.co/image/ab6761610000e5eb1cf142a710a2f3d9b7a62da1',
      latestMessage:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed dui eget metus sodales ultricies quis ut purus. Aliquam erat volutpat.',
    },
  ];
  const theme = useTheme();
  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      marginVertical: 5,
      paddingHorizontal: 10,
    },
    avatar: {
      width: 65,
      height: 65,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: theme.colors.secondary
    },
    name: {
      color: theme.colors.textPrimary,
      fontWeight: '500',
      fontSize: 17,
    },
    latestMessage: {
      color: theme.colors.textSecondary,
      fontWeight: '300',
      fontSize: 15,
    },
  });
  const Item = ({name, avatar, latestMessage}) => (
    <View style={styles.item}>
      <Image src={avatar} style={styles.avatar} />
      <View style={{marginLeft: 15}}>
        <Text style={styles.name}>{name}</Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.latestMessage}>
          {latestMessage}
        </Text>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Item
            name={item.name}
            avatar={item.avatar}
            latestMessage={item.latestMessage}
          />
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
}
