import { StyleSheet } from "react-native";

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 50,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
  },
  mRight: {
    marginRight: "10%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
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
  containerLinks: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingVertical: 5,
    marginBottom: 25,
  },
  url: {
    // width: "50%",
    color: "blue",
  },
  wh50: {
    // width: "50%",
  },
  txtLeft: {
    textAlign: "left",
  },
  txtRight: {
    textAlign: "right",
  },
});

export default stylesLogin;
