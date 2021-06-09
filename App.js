import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./app/navigations/Navigation";
import TabNavigation from "./app/navigations/TabNavigation";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Fragment>
      <Navigation></Navigation>
      {/* <TabNavigation></TabNavigation> */}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
