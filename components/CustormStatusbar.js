import React, {useState} from 'react';
import { Button, View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const CustormStatusBar = ({
    backgroundColor, barStyle="dark-content"
  })=>{
    // const insets = useSafeAreaInsets()
    return (
      <View style={{ backgroundColor}}>
        <StatusBar 
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={barStyle}
          hidden={true}
        />
      </View>
    )
  }

  export default CustormStatusBar