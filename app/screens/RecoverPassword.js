import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// Estilos
import stylesRecoveryPassword from "../assets/styles/RecoveryPassword";

const RenderRecoveryPassword = () => {
  return (
    <View>
      <View style={stylesRecoveryPassword.flex}>
        <TextInput style={stylesRecoveryPassword.inputs} placeholder="Correo" />
      </View>
      <View style={{ marginTop: 25, alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => console.log("Inicio de sesion")}
          style={stylesRecoveryPassword.button}
        >
          <Text style={{ color: "white" }}>RECUPERAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = ({ navigation }) => {
  return (
    <View style={stylesRecoveryPassword.container}>
      <Text style={stylesRecoveryPassword.title}>Recuperar Contraseña</Text>
      <View
        style={stylesRecoveryPassword.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <RenderRecoveryPassword />
    </View>
  );
};

export default App;
