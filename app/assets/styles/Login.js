import { StyleSheet } from "react-native";

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    marginBottom: 20,
    marginTop: 20,
  },
  inputs: {
    width: "60%",
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 30,
    backgroundColor: "white",
    padding: 5,
    // borderWidth: 2,
    // borderColor: '#dadae8',
    paddingLeft: 15,
  },
  flex: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "5%",
    width: "100%",
    backgroundColor: "white",
  },
  mRight: {
    marginRight: "10%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#1e90ff",
    backgroundColor: "#21e124",
    padding: 10,
    borderRadius: 30,
    width: 250,
    marginBottom: 10,
  },
  Rotar: {
    marginTop: 50,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  url: {
    color: "blue",
  },
});

export default stylesLogin;
