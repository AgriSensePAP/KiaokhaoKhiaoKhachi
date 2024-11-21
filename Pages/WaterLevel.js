import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Rect, Text as SvgText } from "react-native-svg";

export default function WaterLevel() {
  const [waterLevel, setWaterLevel] = useState(20); // Initial water level

  const SCREEN_WIDTH = Dimensions.get("window").width;
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const MAX_LEVEL_CM = 30; // Maximum water level in cm
  const TUBE_HEIGHT = SCREEN_HEIGHT * 0.4; // Tube height (40% of screen height)
  const TUBE_WIDTH = 80 * 3; // Tube width (3 times wider)
  const WATER_HEIGHT = (waterLevel / MAX_LEVEL_CM) * TUBE_HEIGHT; // Calculate water height

  // Generate random water levels every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomLevel = parseFloat((Math.random() * MAX_LEVEL_CM).toFixed(2)); // Random value with 2 decimals
      setWaterLevel(randomLevel);
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Level Monitor</Text>

      {/* Tube and Water Level Graphic */}
      <Svg
        height={TUBE_HEIGHT + 50}
        width={SCREEN_WIDTH * 0.6}
        viewBox={`0 0 ${TUBE_WIDTH + 20} ${TUBE_HEIGHT}`}
        style={styles.svg}
      >
        {/* Tube */}
        <Rect
          x="10"
          y="0"
          width={TUBE_WIDTH}
          height={TUBE_HEIGHT}
          stroke="black"
          strokeWidth="2"
          fill="none"
          rx="15"
        />
        {/* Water Level */}
        <Rect
          x="10"
          y={TUBE_HEIGHT - WATER_HEIGHT}
          width={TUBE_WIDTH}
          height={WATER_HEIGHT}
          fill="#ADD8E6" // Light blue
          rx="15"
        />
        {/* Water Level Label */}
        <SvgText
          x={TUBE_WIDTH / 2 + 10} // Center text horizontally
          y={TUBE_HEIGHT - WATER_HEIGHT - 10}
          fontSize="12"
          fill="black"
          textAnchor="middle"
        >
          {waterLevel} cm
        </SvgText>
      </Svg>

      <Text style={styles.sliderText}>Current Water Level: {waterLevel} cm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  svg: {
    marginBottom: 20,
  },
  sliderText: {
    fontSize: 16,
    marginTop: 10,
  },
});
