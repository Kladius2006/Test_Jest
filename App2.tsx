import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {evenOrOdd} from './evenOrOdd'

export default function App2({ onBack }: { onBack: () => void }) {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');

  const [result , setResult] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        
        <TextInput
          keyboardType ='numeric'
          style={styles.inputBox}
          value={num1}
          onChangeText={setNum1}>
        </TextInput>

        <TextInput
          keyboardType ='numeric'
          style={styles.inputBox}
          value={num2}
          onChangeText={setNum2}>
        </TextInput>

        <TextInput
          keyboardType ='numeric'
          style={styles.inputBox}
          value={num3}
          onChangeText={setNum3}>
        </TextInput>

        <View style={styles.outputBox}>
          <Text style={styles.outputText}>
            {result}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.processButton} onPress={()=> setResult(evenOrOdd(num1,num2,num3))}>
        <Text style={styles.buttonText}>Process</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>Page1</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  rowContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 40, 
    paddingHorizontal: 10,
  },

  inputBox: {
    flex: 1,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 5,
    fontSize: 16,
    marginHorizontal: 4,
    textAlign: 'center',
  },
  outputBox: {
    flex: 1, 
    height: 50,
    backgroundColor: '#f0f0f0',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    paddingHorizontal: 5,
  },
  outputText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20
  },
  processButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    borderColor: '#000',
    borderWidth: 1,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});