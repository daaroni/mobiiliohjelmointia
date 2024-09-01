import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [tulos, setTulos] = useState('');
  const [eka, setEka] = useState('');
  const [toka, setToka] = useState('');

  const laske = lasku => {
    const [number1, number2] = [Number(eka), Number(toka)];
    switch(lasku) {
      case 'plus':
        setTulos(number1 + number2);
        break;
      case 'miinus':
        setTulos(number1 - number2);
        break;
    }
    setEka('');
    setToka('');
  }  

  return (
    <View style={styles.container}>
      
      
      <Text>Tulos: {tulos}</Text>
      
      <TextInput style={styles.input} keyboardType='phone-pad' onChangeText={text => setEka(text)} value={eka}></TextInput>
      
      <TextInput style={styles.input} keyboardType='phone-pad' onChangeText={text => setToka(text)} value={toka}></TextInput>
      
      
      <View style={styles.Buttons}>
      <View style={styles.button}><Button title='+' onPress={() => laske('plus')}></Button></View>
      <View style={styles.button}><Button title='-' onPress={() => laske('miinus')}></Button></View>
      
      
      </View>
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
  input: {
    borderColor: 'grey',
    padding: '25',
    width: '75%',
    borderWidth: 1,
    margin: 5,
  },
  button: {
    width: '30%'
  },
  Buttons:{
    width: '20%',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  }
});
