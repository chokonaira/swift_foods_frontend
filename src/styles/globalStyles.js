import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  authForm: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 43,
    justifyContent: "center",
    top: "10%",
  },
  authLoginForm: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 40,
    justifyContent: "center",
    top: "20%",
  },
  registerInput: {
    borderBottomWidth: 2,
    padding: 5,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 6,
    color: "black",
    marginTop: "3%",
    borderColor: "#fff",
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  authText:{
    color: "#fff",
    fontWeight: "bold",
    fontSize: 35,
    alignSelf: "center",
  },
  loginInput: {
    borderBottomWidth: 1.5,
    padding: 7,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 6,
    color: "black",
    marginTop: "4%",
    borderColor: "#fff",
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  emptyInput: {},
  authFormInput: {
    width: "100%",
    justifyContent: "center",
    height: "100%",
    // top: 10,
  },
  formText: {
    color: "red",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
  },
  formButton: {
    marginTop: "5%",
    backgroundColor: "#f0a500",
    alignSelf: "center",
    alignItems: "center",
    width: "50%",
    padding: 13,
    borderRadius: 30,
  },
  formTextWrapper: {
    alignItems: "center",
    width: "100%",
    top: "12%",
  },
  dashboard: {
    width: "98%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#fff",
    padding: 30,
    width: "95%",
    fontSize: 17,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    bottom: "12%",
  },
  link: {
    alignItems: "center",
    width: "100%",
    bottom: "9%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f0a500",
    color: "#fff",
    padding: 13,
    width: "50%",
    borderRadius: 30,
    padding: 17,
  },
  buttonWrapper: {
    marginTop: "50%",
    alignItems: "center",
    width: "100%",
    bottom: "8%",
  },
  buttonText: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
  },
  logo: {
    borderRadius: 100,
    width: "40%",
    height: "37%",
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "flex-start",
    top: "8%",
    borderRadius: 150,
    flex: 1,
  },
  loginText: {
    paddingRight: 7,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    top: "7%",
  },
  loginTextWrapper: {
    flexDirection: "row",
    top: 35,
    alignSelf: "center",
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  registerText: {
    paddingTop: 8,
    paddingRight: 7,
    alignSelf: "flex-end",
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  registerTextSpan: {
    color: "#fff",
    paddingRight: 12,
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  loginTextSpan: {
    color: "#fff",
    paddingRight: 8,
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  loginTextSpanWrapper: {
    // top: '8%'
  },
  keyboardViewContainer: {
    flex: 1,
  },
  errorText: {
    color: "#fff",
    paddingTop: ".5%",
    paddingLeft: "2%",
    fontWeight: "bold",
  },
  FooterWrapper: {
    // position: "bottom",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 10,
    height: "8%",
    backgroundColor: "#f0a500",
  },
  footerText: {
    fontSize: 8,
  },
  tinyIcon: {
    width: 25,
    height: 25,
    borderColor: "grey",
    // padding: 8
  },
  HeaderWrapper: {
    width: "100%",
    color: "#fff",
  },
  searchBar: {
    width: "100%",
    // height: '70%',
  },
  headerText: {
    alignSelf: 'center',
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    letterSpacing: .5,
    padding: 5
  },
  icon: {
    color: "#fff",
    flexDirection: "row",
  },
  imageCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  cardText: {
    borderRadius: 1,
    fontSize: 10,
    textAlign: "center",
    margin: 5,
  },
  safeArea: {
    height: "100%",
  },
  profitTop:{
    height: "45%",
    width: "90%",
    padding:10,
    margin:10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: "flex-start",
    borderRadius: 50,
    // opacity:.8,
    borderWidth:1,
    borderColor:'#f0a500',
    // flex: 1
  },
  profileBottom:{
    flex: 1,
    height: "45%",
    width: "90%",
    margin:5,
    backgroundColor: '#f0a500',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 50,
  },
  profileAvartarImage:{
    height: "80%",
    width: "50%",
    marginBottom:10,
    borderRadius: 100,
  },
  profileWrapper:{
    // fontWeight: "bold",
    // color: 'black',
    padding: 3
  },
  profileBottomText:{
    height: "80%",
    width: "50%",
    marginBottom:10,
    borderRadius: 100,
  },
  profileButton:{
    backgroundColor: '#f0a500',
    alignItems: 'center',
    alignSelf: 'center',
    width: '25%',
    borderRadius: 5,
  },
  profileButtonText:{
    fontWeight: "bold",
    color: 'black',
    padding: 3
  }
});
