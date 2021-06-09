import { StyleSheet } from "react-native";

const stylesRecoveryPassword = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  flex: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "5%",
    width: "100%",
    backgroundColor: "white",
  },
  inputs: {
    width: "75%",
    borderWidth: 1,
    // borderColor: "thistle",
    borderColor: "#dadae8",
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: "white",
    padding: 5,
    paddingLeft: 15,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#21e124",
    padding: 10,
    borderRadius: 30,
    width: 250,
  },
});

export default stylesRecoveryPassword;
