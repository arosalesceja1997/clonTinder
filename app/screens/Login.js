import React, { useState, Component, createRef } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

// Estilos
import stylesLogin from "../assets/styles/Login";

const RenderLogin = ({ navigation }) => {
  const [text, setText] = useState(null);
  const [pass, setPass] = useState(null);

  return (
    <ScrollView>
      <View style={stylesLogin.container}>
        <Text h4 style={stylesLogin.title}>
          Iniciar sesión
        </Text>
        <View style={stylesLogin.flex}>
          <Input
            placeholder="Correo"
            leftIcon={<Icon name="user" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
          />
        </View>

        <View style={stylesLogin.flex}>
          <Input
            placeholder="Contraseña"
            leftIcon={<Icon name="lock" size={24} color="gray" />}
            onChangeText={(text) => setText(text)}
            defaultValue={text}
            secureTextEntry={true}
          />
        </View>

        <View style={stylesLogin.flex}>
          <View style={stylesLogin.containerLinks}>
            <View style={stylesLogin.wh50}>
              <Text
                style={stylesLogin.url}
                onPress={() => navigation.navigate("Recover")}
              >
                Olvide la Contraseña?
              </Text>
            </View>

            <View style={stylesLogin.wh50}>
              <Text
                style={stylesLogin.url}
                onPress={() => navigation.navigate("Register")}
              >
                Registrar me
              </Text>
            </View>
          </View>
        </View>

        <Button
          icon={<Icon name="arrow-right" size={20} color="white" />}
          iconRight
          title="Ingresar "
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </ScrollView>
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
