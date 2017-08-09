import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Image,
  StatusBar,
  TouchableHighlight,
  Alert,
  WebView
  
} from "react-native";
import { AppLoading, Font } from "expo";
/**Components from native base UI.*/
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Title,
  Form,
  Item,
  Label,
  Input,
  Button
} from "native-base";
import assets from "../assets/";

/**external function */
import * as TgridReducer from "../reducers/index";
import { login } from "../actions/index";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ fontLoaded: true });
     
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps,"nextprops")
    if (nextProps.hasOwnProperty("userResponse")) {
      if (!nextProps.userResponse.success) {
        alert(nextProps.userResponse.msg);
    } else {
        alert(nextProps.userResponse.msg);
    }
  }
  }
  submitLogin = () => {
    
    let userData = {
      name : this.userInput.props.value,
      password : this.passwordInput.props.value
    }
    console.log(userData,"userdata")
       console.log(this.props,"props")
    this.props.loginUser(userData);
    
  };
  _onPressFb = () => {
    alert("Fb Lgoin");
  };
  _onPressGoogle = () => {
    alert("google login");
  };
  render() {
    return this.state.fontLoaded ? <Container>
          <Header>
            <Title style={{ marginTop: 20 }}>Login</Title>
          </Header>
          {/* <View style={{ flex: 1, flexDirection: "column" }}> */}
          <Image source={assets.companyLogo} style={{ height: 100, width: 300, resizeMode: "contain", alignSelf: "center" }} />
          <Form style={{ width: 300, alignSelf: "center" }}>
            <Item floatingLabel>
              <Label>Employee Code or Email</Label>
              <Input  style={{ marginLeft:1 }} returnKeyType={"next"} autoFocus={true} getRef={input => (this.userInput = input)} onSubmitEditing={event => this.passwordInput._root.focus()} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry={true} style={{ marginLeft:1 }} getRef={input => (this.passwordInput = input)}  onSubmitEditing={event => this.submitLogin.bind(this)} />
            </Item>
          </Form>
           <Button primary  onPress={ this.submitLogin.bind(this)} style={{ alignSelf: "center", height: 40, width: 290, marginTop: 20, marginLeft: 10, justifyContent: "center" }}>
                 <Text> submit </Text>
               </Button>

          <View style={{ justifyContent: "center", alignSelf: "center", height: 40 }}>
            <Text>Forgot Password</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center", height: 40 }}>
            <Text>OR</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableHighlight underlayColor={"#fff"} onPress={this._onPressFb.bind(this)} style={{ alignSelf: "center", paddingRight: 20 }}>
              <Image source={assets.fbLogin} style={{ height: 60, width: 60, resizeMode: "contain" }} />
            </TouchableHighlight>
            <TouchableHighlight onPress={this._onPressGoogle.bind(this)}>
              <Image source={assets.googleLogin} style={{ height: 60, width: 60, resizeMode: "contain" }} />
            </TouchableHighlight>
          </View>
          {/* </View> */}
        </Container> : <AppLoading />;
  }
}
const mapStateToProps = state => {
  console.log(state);
  // const login_Response = TgridReducer.getEntityByKey(state, "LoginUser");
  // console.log(login_Response, "login_Response");
 
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    loginUser: userData => dispatch(login(userData))
  };
};
Login = connect(mapStateToProps, mapDispatchToProps)(Login);
