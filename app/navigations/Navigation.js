import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigators() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Home" component={TabsNavigators} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
