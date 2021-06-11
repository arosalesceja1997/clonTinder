import React, { useState, Component, createRef } from "react";
import { StyleSheet, TextInput, Image } from "react-native";
// import { Text, View } from "../components/Themed";
import { Entypo } from "@expo/vector-icons";

import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from "react-native";

// Estilos
import stylesRegister from "../assets/styles/Register";

const RenderRegister = () => {
  return (
    <View style={stylesRegister.flex}>
      <View style={{ flex: 1 }}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Entypo name="add-user" size={50} color="black" />
          </View>
          <KeyboardAvoidingView enabled>
            <View style={stylesRegister.SectionStyle}>
              <TextInput
                style={stylesRegister.inputStyle}
                placeholder="Ingresa nombre"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
              />
            </View>
            <View style={stylesRegister.SectionStyle}>
              <TextInput
                style={stylesRegister.inputStyle}
                placeholder="Ingresa correo"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                returnKeyType="next"
              />
            </View>
            <View style={stylesRegister.SectionStyle}>
              <TextInput
                style={stylesRegister.inputStyle}
                placeholder="Ingresa contraseña"
                placeholderTextColor="#8b9cb5"
                returnKeyType="next"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              style={stylesRegister.buttonStyle}
              activeOpacity={0.5}
            >
              <Text style={stylesRegister.buttonTextStyle}>REGISTRAR</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <View style={stylesRegister.container}>
      <Text style={stylesRegister.title}>Registro</Text>
      <View
        style={stylesRegister.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <RenderRegister />
    </View>
  );
};

export default App;
