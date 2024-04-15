import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Friends() {
  const theme = useTheme();
  const data = [
    {
      _id: 1,
      userName: 'Sheldon cooper',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrM9Hp0JiYyyDm8_2gbX2vqAcQd8p25zvc9lAheLhjw&s',
      online: false,
    },
    {
      _id: 2,
      userName: 'Penny',
      avatar:
        'https://e.radio-grpp.io/xlarge/2014/09/26/programasstudio_studio92_2014_08_06_penny_07.jpg',
      online: true,
    },
    {
      _id: 3,
      userName: 'Leonard Hofstadter',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtlCA3Wu6HzHuLLfmFuWH4UAPDIFWOP10ed9hxFz_og&s',
      online: true,
    },
    {
      _id: 4,
      userName: 'Sheldon cooper',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfrM9Hp0JiYyyDm8_2gbX2vqAcQd8p25zvc9lAheLhjw&s',
      online: false,
    },
    {
      _id: 5,
      userName: 'Penny',
      avatar:
        'https://e.radio-grpp.io/xlarge/2014/09/26/programasstudio_studio92_2014_08_06_penny_07.jpg',
      online: true,
    },
    {
      _id: 6,
      userName: 'Leonard Hofstadter',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtlCA3Wu6HzHuLLfmFuWH4UAPDIFWOP10ed9hxFz_og&s',
      online: true,
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
        Friends
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
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
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
                {f.online ? (
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      zIndex: 2,
                      position: 'relative',
                      left: -20,
                      backgroundColor: theme.colors.active,
                      borderRadius: 12,
                    }}></View>
                ) : (
                  <></>
                )}
              </View>
              <Text style={{color: theme.colors.textPrimary}}>
                {f.userName}
              </Text>
            </View>
            <Ionicons
              name="chatbubble-ellipses-sharp"
              color={theme.colors.textPrimary}
              size={20}
              style={{
                padding: 10,
                borderRadius: 50,
                backgroundColor: theme.colors.secondary,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
