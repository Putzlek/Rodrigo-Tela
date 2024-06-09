import React, { Component, } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert,Button } from "react-native";

class Iniciar extends React.Component{
  render (){
    const onPressButton = () => {
      // Exibe a caixa de diálogo ao pressionar o botão
    };
  
    return (
      <View style={styles.Botao}>
        <Button title="Prosseguir" onPress={onPressButton} color={"#008000"}/>
      </View>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Botao: {
    top: 300,
    width: 200,
    borderRadius: 5,
    alignItems: "center",
  }
});

export default Iniciar;


