import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 5,
    paddingTop: 50,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  flex: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "2%",
    width: "100%",
  },
  form: {
    width: "100%",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  containerTeams: {
    backgroundColor: "#eee",
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txtCenter: {
    textAlign: "center",
  },
  containerButtons: {},
});

export default stylesHome;

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       {/* <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Login")}
//       /> */}
//     </View>
//   );
// }
