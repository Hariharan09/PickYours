import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Login} from '../../../Modules';

export type AuthStackParamList = {
  splash: undefined;
  login: undefined;
};

const Auth = createNativeStackNavigator<AuthStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'splash'}>
      <Auth.Screen name={'splash'} component={Splash} />
      <Auth.Screen name={'login'} component={Login} />
    </Auth.Navigator>
  );
};

export {AuthStack};
