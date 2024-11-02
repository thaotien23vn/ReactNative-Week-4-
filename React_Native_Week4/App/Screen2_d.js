import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, StyleSheet } from 'react-native';

export default function App() {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    // Logic to generate password here (not provided in this example)
    setGeneratedPassword('NewPassword123!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      
      <View style={styles.passwordContainer}>
        <Text style={styles.passwordText}>{generatedPassword}</Text>
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.optionLabel}>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={passwordLength}
          onChangeText={(text) => setPasswordLength(text)}
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.optionLabel}>Include lower case letters</Text>
        <CheckBox
          value={includeLowerCase}
          onValueChange={setIncludeLowerCase}
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.optionLabel}>Include uppercase letters</Text>
        <CheckBox
          value={includeUpperCase}
          onValueChange={setIncludeUpperCase}
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.optionLabel}>Include numbers</Text>
        <CheckBox
          value={includeNumbers}
          onValueChange={setIncludeNumbers}
        />
      </View>

      <View style={styles.optionRow}>
        <Text style={styles.optionLabel}>Include special symbols</Text>
        <CheckBox
          value={includeSymbols}
          onValueChange={setIncludeSymbols}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b3f8c',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  passwordContainer: {
    width: '100%',
    backgroundColor: '#111236',
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  passwordText: {
    color: '#fff',
    fontSize: 16,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
    width: '100%',
  },
  optionLabel: {
    color: '#fff',
    fontSize: 14,
  },
  input: {
    width: 50,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#565ad2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
