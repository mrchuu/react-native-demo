import {Image} from 'react-native';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from 'react-native-paper';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
export default function YouMayKnow() {
  const theme = useTheme();
  const data = [
    {
      _id: 1,
      userName: 'Lebron James',
      avatar:
        'data:image/jpeg;base64,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',
    },
    {
      _id: 2,
      userName: 'Jenifer Laurence',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2wyD9bJuTfSc0dtgmzgoQRkTxPhliMuJVg-rKKPu7A&s',
    },
    {
      _id: 3,
      userName: 'Robert Oppenheimer',
      avatar:
        'https://i.pinimg.com/474x/9d/cc/a2/9dcca26e9bd4d5ed2cfe536693321a8c.jpg',
    },
    {
      _id: 4,
      userName: 'Lionel Messi',
      avatar:
        'https://i.kym-cdn.com/entries/icons/original/000/036/537/a31feu0g3yg41.jpg',
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
        You May Know
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
              </View>
              <Text style={{color: theme.colors.textPrimary}}>
                {f.userName}
              </Text>
            </View>
            <AntDesignIcon
              name="adduser"
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
