import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.content}>Hello</Text>
      <View style={styles.Text}>
        <Text>hello</Text>
        <Text>my friend</Text>
      </View>
      <View>
        <textarea name="" id=""></textarea>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.Text}>
        <Text>hello</Text>
        <Text>my friend</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  content: {
    color: "green",
  },

  Text: {
    display: "flex",
    backgroundColor: "red",
    padding: "auto",
  },
  Textarea:{
color:"black"
  }
});
