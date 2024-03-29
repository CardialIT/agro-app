import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    margin: 0,
  },

  header: {
    height: 150,
    paddingRight: -20,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalBox: {
    marginTop: -60,
  
    backgroundColor: "white",
    height: 140,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  total: {
    height: 120,
    width: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  numberTotal: {
    fontSize: 60,
  },

  profilebox: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: 30,
    backgroundColor: "red",
  },

  textWelcome: {
    fontSize: 20,
    marginTop: -30,
    fontWeight: "bold",
  },

  profile: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },

  options: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },

  buttonOption: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 2, // Android
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 150,
    width: 140,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  iconOption: {
    height: 60,
    width: 60,
  },

  imageDecoration: {
    height: 90,
    width: 90,
    marginTop: -30,
  },

  cowImage: {
    height: 200,
    width: 200,
    marginLeft: -50,
  },
});
