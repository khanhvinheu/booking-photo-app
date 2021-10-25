import * as React from 'react';
import { Button, View, Text } from 'react-native';

function DetailScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button                     
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}       
        />    
        <Button
          title="Go to Login"      
          onPress={() => navigation.navigate('Login')}
        />    
      </View>
    )
}
    
export default DetailScreen;