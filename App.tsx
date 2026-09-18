import { useState } from 'react';
import { StyleSheet, Text,TextInput, View, useWindowDimensions, TouchableOpacity, ScrollView, Modal} from 'react-native';
import {calculatet , vat} from './calculateText';
import App2 from './App2';

export default function App()
{
 const {width, height} = useWindowDimensions();
 const [aboutVisible, setAboutVisible] = useState(false);
 const [page2 ,setPage2] = useState(false)

 const styles = StyleSheet.create({
 containerPortrait: {
   flexDirection: 'column',
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'flex-start',
 },
 RowBetweenContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginBottom: height * 0.01,
   marginTop: height * 0.01,
 },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  buttonText: {
  color: '#fff',
   fontSize: height * 0.025,
   fontWeight: 'bold',
  },
 title: {
   fontSize: 20,
   fontWeight: 'bold',
   color: '#000',
   textAlign: 'center',
   marginBottom: 20,
   marginTop: 50,
 },
 containerLandscape: {
   flexDirection: 'row',
   flex: 1,
   backgroundColor: '#fff',
   justifyContent: 'center',
 },
 input:{
   width: '20%',
   backgroundColor: '#fff',
   borderWidth: 1,
   borderRadius: 8,
   borderColor: '#000',
   fontSize: 22,
   textAlign: 'center',
   padding: 10,
   marginHorizontal: width * 0.02,
  },
  resultContainer:{
    width: '30%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    padding: 15,
    alignContent: 'center',
    marginHorizontal: width * 0.02,
  },
  resultText:{
    color:'#000',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  resultValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  leftPanel:{
    flex: 1,
    paddingLeft: width * 0.01,
    paddingRight: width * 0.01,
    justifyContent: 'flex-start',
  },
  rightPanel:{
    flex: 1,
    paddingLeft: 20,
    paddingRight: 50,
 },
  historyItem: {
    fontSize: 18,
    marginBottom: 8,
 },
 historyContainer: {
  marginTop: 30, 
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 10,
  padding: 10,
  height: 400,         
},
historyContainerLandscape: {
  marginTop: 40,  
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 10,
  padding: 10,
  height: 320,          
},
historyTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 10,
},
clearbutton: {
 backgroundColor: '#ff4d4d',
 width: width * 0.2,
 borderRadius: 8,
 borderWidth: 1,
 padding: 5,
 marginLeft: 240,
 alignItems: 'center',
 },
 clearbuttonLandscape: {
  justifyContent: 'flex-end',
  backgroundColor: '#ff4d4d',
  paddingHorizontal: 16,
  paddingVertical: 8,
  borderRadius: 8,
 },
  historyHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
  },
  aboutButton: {
  backgroundColor: '#4a90e2',
  paddingVertical: 12,
  borderRadius: 8,
  marginTop: 15,
  marginBottom: 15,
  alignItems: 'center',
},

modalBackground: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContainer: {
  width: '85%',
  backgroundColor: '#fff',
  borderRadius: 12,
  padding: 20,
},

modalTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 15,
  textAlign: 'center',
},

modalText: {
  fontSize: 18,
  marginBottom: 10,
},

closeButton: {
  marginTop: 20,
  backgroundColor: '#ff4d4d',
  paddingVertical: 10,
  borderRadius: 8,
  alignItems: 'center',
},
});

 const [num1 , setNUm1] = useState<string>('');
 const [num2 , setNUm2] = useState<string>('');
 const [result, setResult] = useState<number | string>('');
 const [operator , setOperator] = useState<string>('');
 const [history, setHistory] = useState<string[]>([]);

 const performCalculation = (
    num1: string,
    operator: string,
    num2: string
  ) => {
    setOperator(operator);
    const answer = calculatet(num1, operator, num2);

    setResult(answer);

    setHistory((prevHistory) => [
      `${num1} ${operator} ${num2} = ${answer}`,
      ...prevHistory,
    ]);
  };

  const vatCalculation = (num:any) =>{
    const answer = vat(num);
    setResult(answer);
    setHistory((prevHistory) => [
      `${result} vat = ${answer}`,
      ...prevHistory,
    ]);
  }

  if (page2) {
    return <App2 onBack={() => setPage2(false)} />;
  }

  if(height>width){
   return (
    <View style={styles.containerPortrait}>

     <Text style={styles.title}>Calculator</Text>
     <View style={styles.RowBetweenContainer}>
        <TextInput style={styles.input}
           keyboardType='numeric'
           onChangeText = {setNUm1}
           value = {num1}>
        </TextInput>

        <Text style={styles.resultText}>{operator}</Text>

       <TextInput style={styles.input}
           keyboardType='numeric'
           onChangeText = {setNUm2}
           value = {num2}>
       </TextInput>
       <Text style={styles.resultText}>=</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultValue}>{result}</Text>
      </View>
      </View>

      <View style={styles.RowBetweenContainer}>
        <TouchableOpacity style={styles.button} onPress={() =>performCalculation(num1, '+', num2)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() =>performCalculation(num1, '-', num2)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() =>performCalculation(num1, '*', num2)}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() =>performCalculation(num1, '/', num2)}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() =>vatCalculation (result)}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => setAboutVisible(true)}
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.aboutButton} 
        onPress={() => setPage2(true)}
      >
        <Text style={styles.buttonText}>Page2</Text>
      </TouchableOpacity>

      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>History</Text>

        <TouchableOpacity style={styles.clearbutton} onPress={() => setHistory([])}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>

        <ScrollView>
          {history.length === 0 ? (
          <Text style={styles.historyItem}>No history yet.</Text>
          ) : (
          history.map((item, index) => (
          <Text key={index} style={styles.historyItem}>
            {item}
          </Text>
          ))
        )}
        </ScrollView>
      </View>

      <Modal
  visible={aboutVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setAboutVisible(false)}
>
  <View style={styles.modalBackground}>
    <View style={styles.modalContainer}>

      <Text style={styles.modalTitle}>About</Text>

      <Text style={styles.modalText}>
        Calculator App
      </Text>

      <Text style={styles.modalText}>
        Version: 1.0
      </Text>

      <Text style={styles.modalText}>
        Created using React Native and Expo.
      </Text>

      <Text style={styles.modalText}>
        การทดสอบวันที่ 7
      </Text>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setAboutVisible(false)}
      >
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>

    </View>
  </View>
  </Modal>
  </View>
   );
 }
 if(width>height){
   return(
     <View style={styles.containerLandscape}>
      
     <View style={styles.leftPanel}>
     <Text style={styles.title}>Calculator</Text>
     <View style={styles.RowBetweenContainer}>
        <TextInput style={styles.input}
           keyboardType='numeric'
           onChangeText = {setNUm1}
           value = {num1}>
        </TextInput>

        <Text style={styles.resultText}>{operator}</Text>

       <TextInput style={styles.input}
           keyboardType='numeric'
           onChangeText = {setNUm2}
           value = {num2}>
       </TextInput>
       <Text style={styles.resultText}>=</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultValue}>{result}</Text>
      </View>
      </View>

      <View style={styles.RowBetweenContainer}>
        <TouchableOpacity style={styles.button} onPress={() =>performCalculation(num1, '+', num2)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() =>performCalculation(num1, '-', num2)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() =>performCalculation(num1, '*', num2)}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() =>performCalculation(num1, '/', num2)}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() =>vatCalculation (result)}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => setAboutVisible(true)}
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.aboutButton} 
        onPress={() => setPage2(true)}
      >
        <Text style={styles.buttonText}>Page2</Text>
      </TouchableOpacity>

      </View>

      <View style={styles.rightPanel}>
        <View style={styles.historyContainerLandscape}>
          <View style={styles.historyHeader}>
          <Text style={styles.historyTitle}>History</Text>

          <TouchableOpacity style={styles.clearbuttonLandscape} onPress={() => setHistory([])}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
          </View>
          
          <ScrollView>
            {history.length === 0 ? (
            <Text style={styles.historyItem}>No history yet.</Text>
            ) : (
            history.map((item, index) => (
            <Text key={index} style={styles.historyItem}>
              {item}
            </Text>
            ))
          )}
          </ScrollView>
        </View>
      </View>

      <Modal
  visible={aboutVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setAboutVisible(false)}
>
  <View style={styles.modalBackground}>
    <View style={styles.modalContainer}>

      <Text style={styles.modalTitle}>About</Text>

      <Text style={styles.modalText}>
        Calculator App
      </Text>

      <Text style={styles.modalText}>
        Version: 1.0
      </Text>

      <Text style={styles.modalText}>
        Created using React Native and Expo.
      </Text>

      <Text style={styles.modalText}>
        Supports portrait and landscape layouts with calculation history.
      </Text>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setAboutVisible(false)}
      >
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>

    </View>
  </View>
  </Modal>
  </View>
   )
 }
}