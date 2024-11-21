import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Text } from "react-native";

import WaterLevel from "./WaterLevel";
import MethaneGraph from "./MethaneGraph";
import TempGraph from "./TempGraph";
import LightGraph from "./LightGraph";
import HumidityGraph from "./HumidityGraph";
import TotalWaterGraph from "./TotalWaterGraph";
import ShowCarbonFootprint from "./ShowCarbonFootprint";

export default function HomeScreen({ navigation }) {
  const [isMobile, setIsMobile] = useState(Dimensions.get("window").width < 768);

  // Refresh the value of `isMobile` every second
  useEffect(() => {
    const interval = setInterval(() => {
      const { width } = Dimensions.get("window");
      setIsMobile(width < 768);
      console.log("isMobile refreshed:", width < 768);
    }, 1000); // Refresh every 1 second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  const goToRiceFieldInfo = () => {
    navigation.navigate("RiceFieldInfo");
  };
  const goToPipeListScreen = () => {
    navigation.navigate("PipeListScreen");
  };
  const goToPumpListScreen = () => {
    navigation.navigate("PumpListScreen");
  };

  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };


  return (
    <ScrollView contentContainerStyle={styles.M_main}>
      {/* Main Content */}
      <View style={[styles.M_container_DB, isMobile && styles.M_container_DB_Mobile]}>
        {/* <View style={styles.M_container_DB_Header} /> */}

        {/* Upper Section */}
        <View style={[styles.M_containerUp_DB, isMobile && styles.M_containerUp_DB_Mobile]}>
          <WaterLevel style={styles.M_containerUp_DB_1} />
          <MethaneGraph style={styles.M_containerUp_DB_2} />
        </View>

        {/* Middle Section */}
        <View style={[styles.M_containerMid1_DB, isMobile && styles.M_containerMid1_DB_Mobile]}>
          <ShowCarbonFootprint style={styles.M_containerMid1_DB_section} />
          <TouchableOpacity
            onPress={goToRiceFieldInfo}
            style={[
              styles.M_containerMid1_DB_section,
              isMobile && styles.button_Mobile,
              styles.button,
              hoveredButton === "RiceFieldInfo" && styles.buttonHover,
            ]}
            onMouseEnter={() => handleMouseEnter("RiceFieldInfo")}
            onMouseLeave={handleMouseLeave}
          >
            <Text style={styles.buttonText}>Go to Rice Field Info</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goToPipeListScreen}
            style={[
              styles.M_containerMid1_DB_section,
              isMobile && styles.button_Mobile,
              styles.button,
              hoveredButton === "PipeListScreen" && styles.buttonHover,
            ]}
            onMouseEnter={() => handleMouseEnter("PipeListScreen")}
            onMouseLeave={handleMouseLeave}
          >
            <Text style={styles.buttonText}>Go to Pipe List Screen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goToPumpListScreen}
            style={[
              styles.M_containerMid1_DB_section,
              isMobile && styles.button_Mobile,
              styles.button,
              hoveredButton === "PumpListScreen" && styles.buttonHover,
            ]}
            onMouseEnter={() => handleMouseEnter("PumpListScreen")}
            onMouseLeave={handleMouseLeave}
          >
            <Text style={styles.buttonText}>Go to Pump Info</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.M_containerMid2_DB, isMobile && styles.M_containerMid2_DB_Mobile]}>
          <TempGraph style={styles.M_containerMid2_DB_1} />
          <LightGraph style={styles.M_containerMid2_DB_2} />
        </View>

        {/* Lower Section */}
        <View style={[styles.M_containerDown_DB, isMobile && styles.M_containerDown_DB_Mobile]}>
          <HumidityGraph style={styles.M_containerDown_DB_1} />
          <TotalWaterGraph style={styles.M_containerDown_DB_2} />
        </View>
      </View>
    </ScrollView>
  );
}

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const styles = StyleSheet.create({
  M_main: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  M_container_DB: {
    backgroundColor: "#fff",
    flexDirection: "column",
    width: "100%",
    maxHeight: SCREEN_HEIGHT * 0.9,
    flex: 1,
  },
  M_container_DB_Header: {
    backgroundColor: "yellow",
    height: SCREEN_HEIGHT * 0.1,
    margin: 10,
    borderRadius: 10,
  },
  M_containerUp_DB: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    height: SCREEN_HEIGHT * 0.45,
  },
  M_containerMid1_DB: {
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    height: SCREEN_HEIGHT * 0.2,
    padding: 10,
    marginBottom: 20,

  },
  M_containerMid1_DB_section: {
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    height: SCREEN_HEIGHT * 0.2,
    // padding: 10,
    width: "24%",
  },
  M_containerMid2_DB: {
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    height: SCREEN_HEIGHT * 0.45,
    paddingHorizontal: 10,
  },
  M_containerDown_DB: {
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    height: SCREEN_HEIGHT * 0.45,
    padding: 10,
  },
  button: {
    backgroundColor: "#007bff",
    marginHorizontal: 5,
    textAlign: "center",
  },
  button_Mobile: {
    width: "90%",
    height: 70,
    alignSelf: "center",
  },
  buttonHover: {
    backgroundColor: "#0056b3", // Darker blue for hover effect
    transform: [{ scale: 1.05 }], // Slightly increase size on hover
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Styles specific to Mobile
  M_containerUp_DB_Mobile: {
    flexDirection: "column",
    height: "auto",
  },
  M_containerMid1_DB_Mobile: {
    flexDirection: "column",
    height: "auto",
  },
  M_containerMid2_DB_Mobile: {
    flexDirection: "column",
    height: "auto",
  },
  M_containerDown_DB_Mobile: {
    flexDirection: "column",
    height: "auto",
  },
});

