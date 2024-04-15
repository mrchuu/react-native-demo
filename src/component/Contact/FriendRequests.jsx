import {Image, Pressable} from 'react-native';
import {ScrollView, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
export default function FriendRequests() {
  const theme = useTheme();
  const data = [
    {
      _id: 1,
      userName: 'Peter Griffin',
      avatar:
        'data:image/jpeg;base64,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',
    },
    {
      _id: 2,
      userName: 'Lois Griffin',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Lois-Griffin.Family-Guy.webp',
    },
    {
      _id: 3,
      userName: 'Brian Griffin',
      avatar:
        'data:image/jpeg;base64,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',
    },
    {
      _id: 4,
      userName: 'Sheldon cooper',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrM9Hp0JiYyyDm8_2gbX2vqAcQd8p25zvc9lAheLhjw&s',
    },
    {
      _id: 5,
      userName: 'Penny',
      avatar:
        'https://e.radio-grpp.io/xlarge/2014/09/26/programasstudio_studio92_2014_08_06_penny_07.jpg',
    },
    {
      _id: 6,
      userName: 'Leonard Hofstadter',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtlCA3Wu6HzHuLLfmFuWH4UAPDIFWOP10ed9hxFz_og&s',
    },
  ];
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
      <ScrollView style={{height: 190}}>
        {data.map(f => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 7,
            }}
            key={f._id}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                src={f.avatar}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginRight: 10,
                  zIndex: 1,
                }}
              />
              <Text style={{color: theme.colors.textPrimary}}>
                {f.userName}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                style={{
                  paddingHorizontal: 7,
                  paddingVertical: 5,
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <EvilIcons
                  name="check"
                  color={theme.colors.textPrimary}
                  size={20}
                />
                <Text style={{color: theme.colors.textPrimary}}>Approve</Text>
              </Pressable>
              <Pressable
                style={{
                  paddingHorizontal: 7,
                  paddingVertical: 5,
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 5,
                }}>
                <FeatherIcons
                  name="x"
                  color={theme.colors.textPrimary}
                  size={20}
                />
                <Text style={{color: theme.colors.textPrimary}}>Decline</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
