import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ShowCarbonFootprint() {
  // Mock Data for Carbon Footprint
  const carbonFootprint = {
    source: "Car Travel",
    footprint: 120, // in kg CO2e
    date: "2023-11-18",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carbon Footprint</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.sourceText}>{carbonFootprint.source}</Text>
        <Text style={styles.footprintText}>{carbonFootprint.footprint} kg CO₂e</Text>
        <Text style={styles.dateText}>Date: {carbonFootprint.date}</Text>
      </View>
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
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    width: "90%",
  },
  sourceText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  footprintText: {
    fontSize: 16,
    color: "red",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: "#555",
  },
});
