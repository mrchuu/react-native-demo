import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
  const styles = StyleSheet.create({
  });
  return (
    <View style={{flex: 1}}>
      <View>
        <Text>Troi dat dung hoa</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
