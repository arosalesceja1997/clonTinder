import React, { useState, Component, createRef} from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert
} from "react-native";
import { Input, Button, Text, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

// Estilos
import stylesLogin from "../assets/styles/Login";

const RenderLogin = ({ navigation }) => {
  const [text, setText] = useState(null);
  const [pass, setPass] = useState(null);
  console.log(text);
  console.log(pass)
  return (
    <ScrollView>
      <View style={stylesLogin.container}>
        <Avatar
          rounded
          size="large"
          icon={{ name: "user", type: "font-awesome" }}
          containerStyle={{
            backgroundColor: "red",
          }}
        />

        <View style={stylesLogin.flex}>
          <Input
            placeholder="Correo"
            leftIcon={<Icon name="user" size={24} color="#339abf" />}
            onChangeText={(text) => setText(text)}
          />
        </View>

        <View style={stylesLogin.flex}>
          <Input
            placeholder="Contraseña"
            leftIcon={<Icon name="lock" size={24} color="#339abf" />}
            onChangeText={(pass) => setPass(pass)}
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
          buttonStyle={{
            backgroundColor: "red",
          }}
          icon={<Icon name="arrow-right" size={20} color="white" />}
          iconRight
          title="Ingresar "
          onPress={() => text === "MarcoGarma" && pass === "retasfutbol" ? navigation.navigate("Home") : Alert.alert('OOPS!', 'Revisa muy bien los campos', [
            {text: 'Entendido', onPress: () => console.log('entendió')}
          ])}
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
