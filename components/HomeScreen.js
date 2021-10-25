// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// function HomeScreen({ route,navigation }) {
//   // const { name } = route.params;
//   const name = route.params;
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         {/* <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('Details')}       
//         />    
//         <Button
//           title="Go to Login"      
//           onPress={() => navigation.navigate('Login')}
//         />     */}
//         <Text style={
//           {
//             fontSize:20,
//             fontWeight:"bold",
//             color:"#28d8a1",
//             borderColor:"#aaa", borderWidth:0.5, borderStyle:"solid"
//           }
//         }>{"Hello: Man "}</Text>
        
//       </View>
//     )
// }
    
// export default HomeScreen;
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './Task';

export default function HomeScreen() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
       <View style={styles.tasksTop}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
       <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
        </View>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        style={{marginBottom:120}}
        contentContainerStyle={{
          flexGrow: 1,        
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        {/* <Text style={styles.sectionTitle}>Today's tasks</Text> */}
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {     
    paddingHorizontal: 20,
    
  },
  tasksTop: {
    paddingTop: 10,
    paddingHorizontal: 20,
    marginBottom:10
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 0
  },
  writeTaskWrapper: {
    // position: 'absolute',
    // bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',  
    marginTop:10
  },
  input: {    
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#fff',
    borderWidth: 1,
    width: "80%",
    height:50
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#28d8a1',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#28d8a1',
    borderWidth: 1,
   
  },
  addText: {
    color:"#fff"
    
  },
});