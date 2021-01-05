import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name,setName]=useState('Yunus');
  return (
    <View style={styles.container}>
      <View style={styles.part1}>
        <Text style={styles.part2}> Burası Part 1 içindir.</Text>
      </View>
      <View style={styles.body}>
        <Text> Burada da body kısmı var </Text>
        <Text> Benim adım {name} </Text>
        <Text> Burada da body kısmı var </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  part1 :{
    backgroundColor: '#fa3'
  },
  part2 :{
    fontSize: 18,

  },
  body :{
    marginTop:10 ,
    padding:20,
    backgroundColor:  '#3a2'
  }
});
