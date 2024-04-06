import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, Login} from '../../../Modules';
import {AddProducts} from '../../../Modules';

export type DemoStackParamList = {
  'add-products': undefined;
};

const Demo = createNativeStackNavigator<DemoStackParamList>();

const DemoStack: React.FC = () => {
  return (
    <Demo.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'add-products'}>
      <Demo.Screen name={'add-products'} component={AddProducts} />
    </Demo.Navigator>
  );
};

export {DemoStack};
