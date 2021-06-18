import { StyleSheet } from "react-native";

export const stylesDetailChallenges = StyleSheet.create({
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
    backgroundColor: "#00ac7a"
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
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  son: {
    position: 'absolute',
    width: 75,
    height: 25,
    bottom: 8,
    right: 1
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
});
