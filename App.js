import React from 'react';
import Store from "./src/data.json"
import {Text, TextInput, SafeAreaView, StyleSheet, FlatList} from "react-native"
import Card from "./components/Card"

const App = () => {
  const renderItem = ({ item }) => (
    <Card product={item} />
  )
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>PATIKASTORE</Text>
      <TextInput style={styles.search} placeholder="Ara..." />
      <FlatList
        data={Store}
        renderItem={renderItem}
        keyExtractor={item => item.id} numColumns={2}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 30,
    color: "#800080",
    fontWeight: "bold",
    margin: 5
  },
  search: {
    padding: 10,
    paddingLeft: 20,
    backgroundColor: "#eceff1",
    borderRadius: 10,
    margin: 5
  },
  container: {
    margin: 5,
    flex: 1
  }
})

export default App;
