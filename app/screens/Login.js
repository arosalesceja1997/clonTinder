import * as React from "react";
import { View, Text, Button } from "react-native";

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Login")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default Login;
