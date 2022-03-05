import { StyleSheet, Platform, Dimensions } from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  form: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#EA5284",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#EA5284",
    textTransform: "uppercase",
    position: "absolute",
    zIndex: 11,
    textAlign: "center",
    top: 30,
    left: 10,
    right: 10,
  },
  btnSubmit: {
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 4,
    backgroundColor: "#fff",
    textTransform: "uppercase",
    zIndex: 11,
    marginBottom: 40,
    marginHorizontal: 15,
  },
  btnSubmitText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#EA5284",
    textAlign: "center",
    textTransform: "uppercase",
    marginLeft: 5,
  },
  contentContainer: {
    height: 630,
  },
  inputContainer: {
    zIndex: 12,
    width: "100%",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // height: 630,
    // backgroundColor: "blue",
  },
  inputPrefix: {
    fontSize: 63,
    fontWeight: "bold",
    fontFamily: "Lato",
    color: "#fff",
  },
  btn: {
    position: "absolute",
    top: "50%",
    zIndex: 10,
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 44,
    backgroundColor: "#f398b7",
    right: 40,
    marginTop: -22,
  },
  itemTextStyle: {
    fontSize: 64,
    lineHeight: 64,
    fontWeight: "bold",
    fontFamily: "Lato-bold",
    color: "#f398b7",
  },
  activeItemTextStyle: {
    fontSize: 64,
    lineHeight: 64,
    fontWeight: "bold",
    fontFamily: "Lato-bold",
    color: "#fff",
  },
  scrollPickerWrap: {
    height: 630,
    width: 345,
    backgroundColor: "#EA5284",
  },
  disabled: {
    opacity: 0.3,
  },
  eventxIcon: {
    flexDirection: "row",
    paddingVertical: 10,
    alignSelf: "center",
    marginVertical: 5,
    height: 55,
    width: 70,
  },
  txtPriceStyle: {
    fontSize: 40,
    marginTop: Platform.OS == "android" ? -12 : -8,
    color: "#f297b5",
    fontWeight: "bold",
    marginLeft: 5,
  },
  txtPriceChooseStyle: {
    fontSize: 45,
    marginTop: Platform.OS == "android" ? -15 : -11,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 5,
  },

  containerPicker: {
    paddingTop: 60,
    paddingBottom: 30,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  wrapperHorizontal: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    color: "black",
  },
  wrapperVertical: {
    width: 250,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    color: "black",
  },
  OptionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
  },
  logoXicon: {
    position: "absolute",
    top: "46%",
    zIndex: 10,
    width: 45,
    height: 52,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    // left: 110,
  },

  wheelPicker: {
    width: 200,
    height: 150,
  },
});
