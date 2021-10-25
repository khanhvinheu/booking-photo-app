import * as React from 'react';
import { Button, View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login'
import HomeScreen from './components/HomeScreen'
import DetailScreen from './components/DetailScreen'
import NavBtn from './components/NavBtn'
import CustormStatusBar from './components/CustormStatusbar';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
    <CustormStatusBar backgroundColor="#101010"/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={
          {  headerShown: false}
        }/>
        <Stack.Screen name="Home" options={{
          title: 'Home', headerStyle: {
            backgroundColor: '#28d8a1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            flex: 1, alignItems: 'center', justifyContent: 'center'
          },
          headerShown: false
        }}

          component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="NavBtn" component={NavBtn} options={
          {  headerShown: false}
        }/>
      </Stack.Navigator>
    </NavigationContainer>

    </SafeAreaProvider>
  );
}

export default App;
