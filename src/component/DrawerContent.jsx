import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useTheme} from 'react-native-paper';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native';

export default function DrawerContent(props) {
  const theme = useTheme();
  const styles = StyleSheet.create({});
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.secondary}}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          src={
            'https://variety.com/wp-content/uploads/2023/06/avatar-1.jpg?w=1000'
          }
          style={{width: 55, height: 55, borderRadius: 70}}
        />
        <AntDesignIcon
          name="down"
          style={{
            padding: 10,
            backgroundColor: theme.colors.third,
            borderRadius: 7,
          }}
          color={theme.colors.textPrimary}
          size={20}
        />
      </View>

      <Text
        style={{
          color: theme.colors.textPrimary,
          paddingHorizontal: 10,
          marginTop: 15,
        }}>
        Chu Quý Sơn
      </Text>
      <View
        style={{
          borderBottomColor: theme.colors.textSecondary,
          borderBottomWidth: 1,
          marginHorizontal: 10, marginTop: 10
        }}></View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
