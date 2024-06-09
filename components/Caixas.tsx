import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Caixa = () => {
  const [Marcada, Alterar] = useState(false);

  const toggleCheckBox = () => {
    Alterar(!Marcada);
  };

  return (
    <TouchableOpacity onPress={toggleCheckBox} style={styles.touchable}>
      <View style={styles.checkbox}>
        {Marcada && <Text>✓</Text>}
      </View>
      <Text style={styles.Alinhar}>Marcada/Desmarcada</Text>
    </TouchableOpacity>
  );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  checkbox: {
    top: 190,
    right: 150,
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: '#4169E1',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Alinhar: {
    top: 145,
    right: 48,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    borderColor: '#4169E1',
    borderWidth: 2,
    backgroundColor: '#4169E1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Caixa;
