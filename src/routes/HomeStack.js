import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, TouchableOpacity, Image, Text} from 'react-native';
import HomeScreen from '../pages/HomeScreen';
import ReviewDetails from '../pages/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({navigation}) => (
  <Navigator
    headerMode='screen'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
      },
      headerTintColor: '#444',
      height: 60
    }}
  >
    <Screen
      name='Home'
      component={HomeScreen}
      options={{ 
        title: 'GameZone',
        headerShown: true,
        headerLeft: () => (
          <Button
            onPress={() => navigation.toggleDrawer()}
            title="Info"
            color="#fff"
          />
        )
      }}
    />
    <Screen
      name='ReviewDetails'
      component={ReviewDetails}
      options={{ title: 'Review Details' }}
    />
  </Navigator>
);

export default HomeStack;
