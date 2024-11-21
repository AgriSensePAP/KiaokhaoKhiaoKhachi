import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function PipeListScreen({ navigation }) {
  // Mock data for pipes
  const pipes = [
    { id: "1", name: "Pipe A", location: "Field 1" },
    { id: "2", name: "Pipe B", location: "Field 2" },
    { id: "3", name: "Pipe C", location: "Field 3" },
  ];

  // Render a single pipe item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.pipeItem}
      onPress={() => navigation.navigate("PipeInfoData", { pipe: item })}
    >
      <Text style={styles.pipeName}>{item.name}</Text>
      <Text style={styles.pipeLocation}>Location: {item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>List of Pipes</Text>
      <FlatList
        data={pipes}
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
  pipeItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  pipeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  pipeLocation: {
    fontSize: 14,
    color: "#555",
  },
});
