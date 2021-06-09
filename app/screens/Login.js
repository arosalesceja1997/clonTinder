import React, { useState, Component, createRef } from "react";
import {
  TextInput,
  Button,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Estilos
import stylesLogin from "../assets/styles/Login";

const RenderLogin = ({ navigation }) => {
  const [text, setText] = useState(null);
  const [pass, setPass] = useState(null);

  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={stylesLogin.flex}>
        <Icon name="user" size={25} style={stylesLogin.mRight} />
        <TextInput
          style={stylesLogin.inputs}
          placeholder="Correo"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
      </View>

      <View style={stylesLogin.flex}>
        <Icon name="lock" size={25} style={stylesLogin.mRight} />
        <TextInput
          style={stylesLogin.inputs}
          placeholder="Contraseña"
          onChangeText={(text) => setPass(text)}
          defaultValue={pass}
          secureTextEntry={true}
        />
      </View>

      <View style={{ marginTop: 25, alignItems: "center" }}>
        <View style={{ marginBottom: 20 }}>
          <Text
            style={stylesLogin.url}
            onPress={() => navigation.navigate("Recover")}
          >
            Olvide la Contraseña?
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => console.log("Inicio de sesion")}
            style={stylesLogin.button}
          >
            <Text style={{ color: "#ffffff" }}>INICIAR</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Registrar me</Text>
        </View>
      </View>
    </View>
  );
};

function Login({ navigation }) {
  return (
    <View style={stylesLogin.container}>
      <RenderLogin navigation={navigation} />
    </View>
  );
}

export default Login;
