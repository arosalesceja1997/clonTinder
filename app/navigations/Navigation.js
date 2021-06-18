import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import RecoverPasswordScreen from "../screens/RecoverPassword";
import RegisterScreen from "../screens/Register";
import DetailChallenges from "../screens/DetailChallenges";
import Reta from "../screens/Reta";
import Payment from "../screens/Payment";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigators() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Login") {
            iconName = focused ? "person" : "person";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TabsNavigators} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recover" component={RecoverPasswordScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Detalles" component={DetailChallenges} />
        <Stack.Screen name="Reta" component={Reta} />
        <Stack.Screen name="Pagos" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
