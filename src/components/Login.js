import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  View, Image, StatusBar, TouchableHighlight, Alert } from "react-native";
import { AppLoading, Font } from 'expo';
/**Components from native base UI.*/
import { Container, Header, Content,Button, Card, CardItem, Text, Body, Title , Form, Item, Label, Input} from 'native-base';
import assets from '../assets/';

/**external function */
import * as TgridReducer from "../reducers";
import { login } from '../actions';

export default class Login extends React.Component{
async componentWillMount() {
    this.state = {
        fontLoaded : false
    }
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
         this.setState({ fontLoaded: true });
    }
       componentWillReceiveProps(nextProps){
    if(nextProps.hasOwnProperty("delete_bool")){
      if (nextProps.delete_bool){ this.resetForm(), this.setState({ isFormSubmit: false });}
    } 
       }
  submitLogin = () =>{
    console.log(this.refs)
    let userData = {
      username : this.refs.userName,
      password : this.refs.pass
    }
    console.log(userData,"userdata")
    this.props.loginUser(userData);
  }
    _onPressFb = () =>{
      alert("Fb Lgoin");
    }
     _onPressGoogle = () =>{
      alert("google login");
    }
    render(){
       return this.state.fontLoaded ? <Container>
             <Header>
               <Title style={{ marginTop: 20 }}>Login</Title>
             </Header>
             <View style={{ flex: 1, flexDirection: "column" }}>
               <Image source={assets.companyLogo} style={{ height: 100, width: 300, resizeMode: "contain", alignSelf: "center" }} />
               <Form style={{ width: 300, alignSelf: "center" }}>
                 <Item floatingLabel>
                   <Label>Employee Code or Email</Label>
                   <Input getRef={(c) => this._inputDesc = c} />
                 </Item>
                 <Item floatingLabel>
                   <Label>Password</Label>
                   <Input ref="pass" />
                 </Item>
               </Form>
               <Button primary  onPress={this.submitLogin.bind(this)} style={{ alignSelf: "center", height: 40, width: 290, marginTop: 20, marginLeft: 10, justifyContent: "center" }}>
                 <Text> submit </Text>
               </Button>
               <View style={{ justifyContent: "center", alignSelf: "center", height: 40 }}>
                 <Text>Forgot Password</Text>
               </View>
               <View style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center", height: 40 }}>
                 <Text>OR</Text>
               </View>
               <View style={{flexDirection:'row',justifyContent: "center"}}>
               <TouchableHighlight underlayColor={'#fff'} onPress={this._onPressFb.bind(this)} style={{alignSelf: "center" ,paddingRight: 20}}>
                 <Image  source={assets.fbLogin} style={{ height: 60, width: 60, resizeMode: "contain"}} />
               </TouchableHighlight>
               <TouchableHighlight onPress={this._onPressGoogle.bind(this)}>
                 <Image  source={assets.googleLogin} style={{ height: 60, width: 60, resizeMode: "contain"}} />
               </TouchableHighlight>
               </View>
             </View>
           </Container> : <AppLoading />; 
    }

}
  const mapStateToProps = state => {
    const login_Response = TgridReducer.getEntityByKey(state, "lgoinResponse");
    console.log(login_Response, "login_Response")
    // const delete_bool = TgridReducer.getEntityByKey(state, "delete_bool");
    return { login_Response };
  };
  const mapDispatchToProps = dispatch => {
    return { loginUser: userData => {
        dispatch(login(userData));
      }}
  };
Login = connect(mapStateToProps, mapDispatchToProps)(Login);