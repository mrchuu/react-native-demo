import {StyleSheet, Text, View} from 'react-native';
import ContentTemplate from '../template/ContentTemplate';
import {Image} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useContext, useEffect, useState} from 'react';
import {Switch} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeContext} from '../context/ThemeContext';
export default function Setting() {
  const theme = useTheme();
  const styles = StyleSheet.create({
    profile: {
      alignItems: 'center',
    },
    avatar: {
      width: 90,
      height: 90,
      borderRadius: 100,
    },
    userName: {
      color: theme.colors.textPrimary,
    },
  });
  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
  const toggleTheme = async () => {
    await AsyncStorage.setItem('isDarkTheme', (!isDarkTheme).toString());
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <ContentTemplate title={'Setting'}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04a586f2-3a0b-427a-be78-1eb4b7ecc2c9/de7sf5m-a6106ec1-4102-4486-a48a-00dfae4c86d9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA0YTU4NmYyLTNhMGItNDI3YS1iZTc4LTFlYjRiN2VjYzJjOVwvZGU3c2Y1bS1hNjEwNmVjMS00MTAyLTQ0ODYtYTQ4YS0wMGRmYWU0Yzg2ZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zKAyBfzPGGIzCktZPgKSioOul7Bqo538lb54FRQdk2U"
        />
        <Text style={styles.userName}>Chu Sơn</Text>
      </View>
      <View>
        <Text style={{color: theme.colors.textPrimary}}>Settings</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: theme.colors.textPrimary}}>Theme</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Switch
              // trackColor={{false: '#767577', true: '#81b0ff'}}
              // thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
              // ios_backgroundColor="#3e3e3e"
              onChange={toggleTheme}
              value={isDarkTheme}
            />
            <Text style={{color: theme.colors.textPrimary}}>
              {isDarkTheme ? 'Dark' : 'Light'}
            </Text>
          </View>
        </View>
      </View>
    </ContentTemplate>
  );
}
