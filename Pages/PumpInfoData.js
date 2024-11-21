import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function PumpInfoData({ route }) {
  // Retrieve the pump data passed from the navigation
  const { pump } = route.params;

  return (
    <View style={styles.container}>
        <Header />
      <Text style={styles.title}>Pump Information</Text>
      <View style={styles.infoCard}>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Name: </Text>
          {pump.name}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Location: </Text>
          {pump.location}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>ID: </Text>
          {pump.id}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  infoCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    color: "#555",
  },
});
