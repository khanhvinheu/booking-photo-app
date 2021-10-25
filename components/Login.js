import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import CheckBox from 'react-native-check-box'


function Login({ navigation }) {
    const [isSelected, setSelection] = useState(true);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const handleSubmit =()=>{
        if(username=="" || password==""){
            Alert.alert("Warrning","Login fail !");
        }
        else{
            navigation.navigate('NavBtn',{name:username})

        }
    }
    return (
        <View style={styles.containerLogin}>
            <View style={styles.sectionTitle}>
                <Text style={styles.titleWhite}>BOOKING</Text>
                <Text style={styles.title}> PHOTO</Text>
            </View>
            <View style={styles.sectionStyle}>
                <Icon style={{ position: "absolute", left: 19, top: 12, zIndex: 99 }} name="user" color="#eee" size={25} />
                <TextInput
                    style={styles.input}
                    placeholder={"Username"}
                    placeholderTextColor="#fff"
                    value={username}
                    onChangeText={setUsername}
                // value={text}
                />

            </View>
            <View style={styles.sectionStyle}>
                <Icon style={{ position: "absolute", left: 15, top: 10, zIndex: 99 }} name="key" color="#eee" size={25} />
                <TextInput
                    style={styles.input}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    placeholderTextColor="#fff"
                    value={password}
                    onChangeText={setPassword}
                // onChangeText={onChangeText}
                // value={text}
                />
            </View>

            <View style={styles.sectionCheckStyle}>
                <CheckBox
                    style={styles.checkBox}
                    onClick={() => {

                    }}
                    isChecked={isSelected}
                    checkedCheckBoxColor={'#20ac7f'}
                    uncheckedCheckBoxColor={"#000"}
                />
                <Text style={{ color: "#fff" }}> Keep me logged in.</Text>
            </View>
          
            <View style={[{ width: "75%", margin: 10, backgroundColor: "red" }]}>
                <Button
                    title="Login"
                    color="#28d8a1"
                    onPress={() =>handleSubmit()}       
                />
            </View>
            <View style={styles.sectionStyle}>               
                <Text style={{ color: "#fff" }}> Forgot password?</Text>
                <Text style={{ color: "#a5e9ce" }}> Recover here</Text>
            </View>
            <View style={styles.sectionFooter}>               
                <Text style={{ color: "#fff" }}> Don't have an account?</Text>
                <Text style={{ color: "#a5e9ce" }}> Signup here</Text>
            </View>          
        </View>
    );
}
const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#101010",
        height: "100%"
    },
    title: {
        color: "#20ac7f",
        fontSize: 35,
        fontWeight: "bold"
    },
    titleWhite: {
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        width: "80%",
        margin: 12,
        marginBottom: 0,
        borderWidth: 1,
        padding: 10,
        borderColor: "#292929",
        backgroundColor: "#292929",
        color: "#fff",
        paddingLeft: 40
        // borderRadius:60

    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    sectionTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',
        // borderWidth: 0.5,
        borderColor: '#000',
        height: 60,
        borderRadius: 5,
        margin: 10,
        marginBottom: 20
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',
        // borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
        marginBottom: 0
    },
    sectionCheckStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
        marginBottom: 0
    },
    checkBox: {
        color: '#fff'
    },
    sectionFooter: {
        position:"absolute",
        bottom:30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',
        // borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
        marginBottom: 0
    },
})
export default Login;