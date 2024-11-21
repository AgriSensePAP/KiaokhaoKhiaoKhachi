import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function PumpListScreen({ navigation }) {
  // Mock data for pumps
  const pumps = [
    { id: "1", name: "Pump A", location: "Rice Field 1" },
    { id: "2", name: "Pump B", location: "Rice Field 2" },
    { id: "3", name: "Pump C", location: "Rice Field 3" },
  ];

  // Render a single pump item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.pumpItem}
      onPress={() => navigation.navigate("PumpInfoData", { pump: item })}
    >
      <Text style={styles.pumpName}>{item.name}</Text>
      <Text style={styles.pumpLocation}>Location: {item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <Header />
      <Text style={styles.title}>Pump List</Text>
      <FlatList
        data={pumps}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
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
  list: {
    paddingBottom: 20,
  },
  pumpItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  pumpName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  pumpLocation: {
    fontSize: 14,
    color: "#555",
  },
});
