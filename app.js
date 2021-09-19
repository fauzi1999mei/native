import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [name, setName]= useState('Mohammad Rizki Fauzi');
  const [person, setPerson] = useState({name : 'Siti Rahmayanti', age : 47});

  const clickHandler = () => {
    setName('Siti Rahmayanti');
    setPerson({name : 'amel' , age : 12});
  }
  const clickHandler2 = () => {
    setName('Mohammad Rizki Fauzi');
    setPerson({name : 'silve' , age : 10});
  }
  
   const [name2, setName2]= useState('silvia');
   const [age2, setAge2] = useState('30');

   const [people, setPeople] = useState([
     {name3 : 'fauzi', number : '1'},
     {name3 : 'rai', number : '2'},
     {name3 : 'silvia', number : '3'},
     {name3 : 'amel', number : '4'},
     {name3 : 'yanti', number : '5'},
     {name3 : 'vina', number : '1'},
   ]);


  return (
    <View style={styles.container}>

      <ScrollView> 
      {people.map((item) => {
        return(
           <View key = {item.number}>
             <Text style ={styles.item}>
               {item.name3}
             </Text>
           </View>

        )
      })}
      
     

      <View style = {styles.header}>
       <Text style = {styles.boldText}>
         Hello world My name is {name}
       </Text>
       {/*new expression*/}
       <Text>name : {name2}, and her age is {age2}</Text>
       <Text>Input your name : </Text>
       <TextInput 
        multiline

       style = {styles.input} placeholder = 'contoh fauzi'
       onChangeText={(val) => setName2(val) }/>
      

      <Text>Input your age : </Text>
       <TextInput 
       keyboardType = 'numeric'
       style = {styles.input} placeholder = 'contoh 30'
       onChangeText={(val) => setAge2(val) }/>
      </View>
      
      <View style = {styles.body}>
      <Text style = {styles.boldText}>My name is {name}</Text>
      <Text style = {styles.text}>I live on Samratulangi Streat Gang Onta Penarukan Village</Text>
      <Text style = {styles.text2}>My University is Ganesha University of Education </Text>
      <StatusBar style="auto" />
     <Text style = {styles.text3}>Hello World and suck fuck I mean making mobile app</Text>
     <Text>Make Button</Text>
     {/* learn using state*/}
     <Text>My name is {name}</Text>
     <Text>{name} always learning something new</Text>
     <Text>she daughter is {person.name}, and his age is {person.age}</Text>
     <View style = {styles.button}>
       <Button title = 'Update Name 1' onPress={clickHandler} />
     </View>
     <View style = {styles.button}>
       <Button title = 'Update Name 2' onPress={clickHandler2} />
     </View>

      </View>

      



      </ScrollView>
    </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   // alignItems: 'center',
    //justifyContent: 'center',
  },
  header:{
    backgroundColor:'pink',
    padding: 20,
  },
  boldText:{
    fontWeight: 'bold',
    
  },
  body : {
    backgroundColor:'yellow',
    padding: 20,
    alignItems: 'center',
    
  },
  text :{
    color:'blue',
    alignItems: 'center',
  },
  text2 : {
    color :  'red',
    alignItems : 'center',
    justifyContent : 'center',
  },
  text3:{
    color : 'green',
  },
  button : {
    marginTop : 20,
  },
  input : {
    borderWidth: 5,
    borderColor:'#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item : {
    marginTop:24,
    padding: 30,
    backgroundColor:'pink',
    fontSize: 24,


  }
  
});
