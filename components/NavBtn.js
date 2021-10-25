import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

function NavBtn({route}) {
    const { name } = route.params;
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 30,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#ffff",
                    borderRadius: 15,
                    height: 90,
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}  initialParams={{name: name}}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Icon name="home" color={focused ? "#28d8a1" : "#000"} size={25} />
                                <Text style={{ color: focused ? "#28d8a1" : "#000" }}>Home</Text>
                            </View>
                        )

                    }
                }}
            />
            <Tab.Screen name="Find" component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Icon name="search" color={focused ? "#28d8a1" : "#000"} size={25} />
                                <Text style={{ color: focused ? "#28d8a1" : "#000" }}>Find</Text>
                            </View>
                        )

                    }
                }}
            />
            <Tab.Screen name="Settings" component={DetailScreen}
                options={{
                    headerShown: false,                  
                    tabBarButton: ({ focused }) => {
                        return (
                            <TouchableOpacity>
                                <View style={{width:80, height:80,top:-20,justifyContent:"center",alignItems:"center",backgroundColor:"#fff", borderRadius:60, borderColor:"red"}}>
                                    <View style={{width:70, height:70,justifyContent:"center",alignItems:"center",backgroundColor:"red", borderRadius:60, borderColor:"red"}}>                                       
                                    <Text style={{color:"#fff", fontSize:25}}>+</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }}
            />
            <Tab.Screen name="Profile" component={DetailScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Icon name="map" color={focused ? "#28d8a1" : "#000"} size={25} />
                                <Text style={{ color: focused ? "#28d8a1" : "#000" }}>Location</Text>
                            </View>
                        )

                    }

                }}
            />
            <Tab.Screen name="Settings2" component={DetailScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Icon name="cog" color={focused ? "#28d8a1" : "#000"} size={25} />
                                <Text style={{ color: focused ? "#28d8a1" : "#000" }}>Setting</Text>
                            </View>
                        )

                    }

                }}
            />
        </Tab.Navigator>
    );
}
export default NavBtn