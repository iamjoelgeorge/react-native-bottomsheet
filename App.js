import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import DashboardScreen from './src/screens/DashboardScreen/DashboardScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <DashboardScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
