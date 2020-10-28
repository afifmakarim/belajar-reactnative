import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Button, View, TouchableOpacity, Image, Text} from 'react-native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const { Navigator, Screen } = createDrawerNavigator();

const Drew = () => (
  <View>
  <View
    style={{
      backgroundColor: '#f50057',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text style={{ color: 'white', fontSize: 30 }}>
      Header
    </Text>
  </View>
</View>
)

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
       <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
      <Drew />
    </DrawerContentScrollView>
  );

const RootDrawerNavigator = () => (
  <Navigator initialRouteName='Home' drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Screen
      name='Home'
      component={HomeStack}
    />
    <Screen
      name='About'
      component={AboutStack}
    />
    <Screen
      name='Ngebut'
      component={AboutStack}
    />
  </Navigator>
);


export default RootDrawerNavigator;