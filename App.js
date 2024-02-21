import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
 
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>
      <View style={styles.secondaryContainer}>
        <Text style={{ color: 'blue', fontSize: 30, fontWeight: 'bold', textAlign: 'end' }}>Paulo Cesar</Text>
        <TextInput style={styles.inputName} ></TextInput>
        <TextInput style={styles.inputName} placeholder='Digite seu nome' secureTextEntry= {true} keyboardType='numeric' ></TextInput>
        <Text style={{ color: 'blue', fontSize: 25, fontStyle: 'italic', textAlign: 'start', borderWidth: 1, borderColor: 'black', borderRadius: 15, marginTop: 15 }}>30</Text>
        <Text style={{ color: 'black', backgroundColor: 'pink', fontSize: 20, fontStyle: 'italic', textAlign: 'center', marginTop: 15 }}>Sala 7</Text>
        <Text style={{color: 'black',fontSize: 25, backgroundColor: 'gray', borderWidth: 1, borderColor: 'black', borderRadius: 15, textAlign: 'center', marginTop: 15}}>Kuroi Killa</Text>
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
  inputName: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    fontSize: 20,
    placeholder:'Digite seu nome',
    inputMode: 'text',
    placeholderTextColor: 'red'
  }
});