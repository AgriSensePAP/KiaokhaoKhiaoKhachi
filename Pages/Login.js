import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Auth } from "aws-amplify";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const passwordInputRef = useRef(null);

  const handleSubmit = async () => {
    setErrorMessage("");

    if (username === "" || password === "") {
      setErrorMessage("Please enter both username and password.");
      return;
    }

    setLoading(true);

    try {
      await Auth.signIn(username, password);
      onLoginSuccess(); // Notify parent on success
    } catch (error) {
      console.error("Login error:", error);

      if (error.code === "UserNotFoundException") {
        setErrorMessage("User does not exist. Please check your username.");
      } else if (error.code === "NotAuthorizedException") {
        setErrorMessage("Incorrect username or password.");
      } else if (error.code === "NetworkError") {
        setErrorMessage("Network error. Please check your connection.");
      } else {
        setErrorMessage(error.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.loginBg}>
      <Text style={styles.loginHeaderText}>KU-Man Admin</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.loginHeader}>Login</Text>
        <TextInput
          style={styles.loginInput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => passwordInputRef.current.focus()}
        />
        <TextInput
          style={styles.loginInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
          ref={passwordInputRef}
        />

        {errorMessage !== "" && (
          <Text style={styles.loginErrorText}>{errorMessage}</Text>
        )}

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity
            style={[
              styles.loginButton,
              { opacity: loading ? 0.6 : 1 },
            ]}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  loginHeaderText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "Black",
    marginBottom: 20,
  },
  loginContainer: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 3,
  },
  loginHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  loginInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
  },
  loginButton: {
    backgroundColor: "lightgreen",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  loginButtonText: {
    color: "black",
    fontSize: 16,
  },
  loginErrorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});
