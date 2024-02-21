import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>
      <View style={styles.secondaryContainer}>
        <Text style={{ color: 'blue', fontSize: 30, fontWeight: 'bold', textAlign: 'end' }}>Paulo Cesar</Text>
        <Text style={{ color: 'blue', fontSize: 25, fontStyle: 'italic', textAlign: 'start', borderWidth: 1, borderColor: 'black', borderRadius: 15 }}>30</Text>
        <Text style={{ color: 'black', backgroundColor: 'pink', fontSize: 20, fontStyle: 'italic', textAlign: 'center' }}>Sala 7</Text>
      </View>
      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondaryContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});