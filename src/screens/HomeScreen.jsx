import React, { Component } from "react";
import { connect } from "react-redux";
import { userProfile } from "../redux/actions/ProfileAction";
import { loginUser } from "../redux/actions/LoginAction";
import { ImageBackground } from "react-native";
import { globalImages } from "../styles/globalImages";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { GlobalStyles } from "../styles/globalStyles";

class Home extends Component {
  componentDidMount() {
    const { isAuthenticated } = this.props.existingUser;
    if (isAuthenticated) {
      console.log(this.props, "this.props");
      this.props.navigation.navigate("Dashboard");
    }
  }
  render() {
    const { isAuthenticated } = this.props.existingUser;
    return (
      <ImageBackground
        style={GlobalStyles.image}
        source={globalImages.HomeBanner}
      >
        <Logo />
        {isAuthenticated ? (
          <Button
            onPress={() => this.props.navigation.navigate("Dashboard")}
            title="Get Started"
          />
        ) : (
          <Button
            onPress={() => this.props.navigation.navigate("Login")}
            title="Get Started"
          />
        )}
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  existingUser: state.existingUser,
  profile: state.userProfile,
});

export default connect(mapStateToProps, { loginUser, userProfile })(Home);
