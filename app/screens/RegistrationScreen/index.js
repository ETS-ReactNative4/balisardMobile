import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

class RegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordPlaceholder: "Пароль",
      passwordText: "",
      phonePlaceholder: "Телефон",
      phoneText: "",
      firstNamePlaceholder: "Имя",
      firstNameText: "",
      lastNamePlaceholder: "Фамилия",
      lastNameText: "",
      isLoading: false
    };
  }

  createUser = () => {
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: this.state.firstNameText,
        lastName: this.state.lastNameText,
        phoneNumber: this.state.phoneText,
        password: this.state.passwordText
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <LinearGradient
        colors={["#000000", "#808080"]}
        style={styles.container}
        start={{ x: 0.2, y: 0.2 }}
        end={{ x: 0.8, y: 0.8 }}
      >
        <KeyboardAvoidingView behavior="position" enabled>
          <View style={styles.registerContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({ phoneText: text })}
                value={this.state.phoneText}
                placeholder={this.state.phonePlaceholder}
                placeholderTextColor="#ffffff"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({ firstNameText: text })}
                value={this.state.firstNameText}
                placeholder={this.state.firstNamePlaceholder}
                placeholderTextColor="#ffffff"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({ lastNameText: text })}
                value={this.state.lastNameText}
                placeholder={this.state.lastNamePlaceholder}
                placeholderTextColor="#ffffff"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.passwordInput}
                onChangeText={text => this.setState({ passwordText: text })}
                value={this.state.passwordText}
                placeholder={this.state.passwordPlaceholder}
                placeholderTextColor="#ffffff"
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({ isLoading: true });
                this.createUser();
              }}
            >
              <View style={styles.buttonContainer}>
                <Text>Создать аккаунт</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  registerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    marginLeft: 15,
    flex: 1,
    color: "white"
  },
  passwordInput: {
    marginLeft: 15,
    flex: 1,
    color: "white"
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#e0e0eb10",
    height: 35,
    width: 250,
    borderRadius: 10,
    margin: 10
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#e0e0eb25",
    height: 40,
    width: 250,
    borderRadius: 25,
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    alignContent: "center"
  },
  logo: { marginBottom: 20, resizeMode: "contain" },

  additionalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {};
};

// const mapDispatchToProps = { increment, decrement, reset };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(RegistrationScreen);
