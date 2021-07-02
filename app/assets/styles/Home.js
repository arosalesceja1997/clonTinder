import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({
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

export const stylesNewHome = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
    paddingLeft: 5,
    paddingTop: 30,
    backgroundColor: "white",
    paddingVertical: 20
  },
  boxData: {
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: 'grey',
  },
  HomeSerach: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  ButtonSerach: {
    width: '20%',
  },
  InputSerach: {
    width: '80%',
    paddingTop: 12
  },
  ContainerReta: {
    flex: 0,
    flexDirection: 'row',
    width: '100%',
    height: 100,
    position: 'relative',
    marginVertical: 5,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  son: {
    position: 'absolute',
    width: 75,
    height: 25,
    bottom: 15,
    right: 10
  },
  hour: {
    position: 'absolute',
    width: 75,
    height: 25,
    bottom: 1,
    right: 1,
    top: 1
  },
  nameReta: {
    paddingLeft: 5,
    position: "absolute",
    left: 0,
    top: 1,
  },
  spaces: {
    paddingLeft: 5,
    position: "absolute",
    left: 0,
    top: 50,
  },
  DetailsReta: {
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: "wrap",
    width: '100%',
    marginVertical: 20,
  },

  ContainerEquipo: {
    width: "100%",
    marginTop: 30,
    backgroundColor: 'white',
  },
  CardStyle: {
    width: "100%",
  },
  Teams: {
    marginLeft: -25,
    width: "117%",
  },
  Team: {
    width: "200%",
    backgroundColor: 'white',
  },
  ButtonWatch: {
    width: "50%",
    justifyContent: "center",
    marginLeft: "26%",
    marginTop: 20
  },
  Cost: {
    width: "75%",
  },
  CostData: {
  },
});

// export default stylesHome;