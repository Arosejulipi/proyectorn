import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Hola,Coder!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDBEA9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
color:"#CB997E"
  },
});
