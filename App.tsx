import React from "react";
import { Button, Text, TextInput , View, StyleSheet, SafeAreaView } from "react-native";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import all your screens
import Login from "./Pages/Login";
import HomeScreen from "./Pages/HomeScreen";
import RiceFieldInfo from "./Pages/RiceFieldInfo";
import PipeListScreen from "./Pages/PipeListScreen";
import PipeInfoData from "./Pages/PipeInfoData";
import PumpListScreen from "./Pages/PumpListScreen";
import PumpInfoData from "./Pages/PumpInfoData";

// Amplify configuration
import outputs from "./amplify_outputs.json";
Amplify.configure(outputs);

// Sign Out Button for Authenticated Users
const SignOutButton = () => {
  const { signOut } = useAuthenticator();

  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};



// Main Application Component
export default function App() {
  const Stack = createStackNavigator();

  return (
    <Authenticator.Provider >
      
      {/* <View style={styles.authWrapper}> */}

        <Authenticator>
          
          <SafeAreaView style={styles.container}>
            <View style={styles.HeaderContainer}>
              <Text style={styles.HeaderText}>Header</Text>
            <SignOutButton />
            </View>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen
                  name="RiceFieldInfo"
                  component={RiceFieldInfo}
                />
                <Stack.Screen
                  name="PipeListScreen"
                  component={PipeListScreen}
                />
                <Stack.Screen
                  name="PipeInfoData"
                  component={PipeInfoData}
                />
                <Stack.Screen
                  name="PumpListScreen"
                  component={PumpListScreen}
                />
                <Stack.Screen name="PumpInfoData" component={PumpInfoData} />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </Authenticator>
      {/* </View> */}
    </Authenticator.Provider>
  );
}

// Styles
const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    width: "80%",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 50,
    borderRadius: 5,
    alignSelf: "center",
    backgroundColor: "#036b52",
  },
  authWrapper: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#ffffff", // Optional background color
    padding: 16, // Optional padding
  },
  HeaderContainer: {
    flexDirection: "row", // Arrange items in a row
    alignItems: "center", // Align items vertically in the center
    justifyContent: "space-between", // Space between "Header" and the button
    backgroundColor: "#fff", // Optional background color
  },
  HeaderText: {
    flex: 1, // Make the Text take up the available space
    textAlign: "center", // Center the text within the space
    fontSize: 36, // Adjust font size
    fontWeight: "bold", // Make the text bold
    color: "#000", // Optional text color
  },
  container: {
    flex: 1,
    padding: 8,
  },
  signOutButton: {
    alignSelf: "flex-end",
    marginBottom: 16,
  },
});
