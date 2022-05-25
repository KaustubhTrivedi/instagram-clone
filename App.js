import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={styles.helloWorld}>
      <Text >Hello World!</Text>
      <Ionic name='play' />
    </View >
  )
}

export default App

const styles = StyleSheet.create({
  helloWorld: {
    fontFamily: "Lobster-Regular",
    margin: 30,
    // backgroundColor: 'black',
  },
  playIcon: {
    fontSize: 20,
  }
})