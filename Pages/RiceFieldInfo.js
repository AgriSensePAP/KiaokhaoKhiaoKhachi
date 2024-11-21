import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

export default function RiceFieldInfo() {
    // Mock Data
    const farmer = {
        id: 1,
        username: "farmer_john",
        password: "******",
        first_name: "John",
        last_name: "Doe",
        telephone: "0812345678",
        email: "john.doe@example.com",
        create_at: "2023-11-18 10:00:00",
    };

    const homeAddress = {
        house_no: "123",
        street: "Main Street",
        village: "Green Village",
        sub_district: "Suburb",
        district: "Central District",
        province: "Metro",
        postcode: "12345",
        latitude: 13.7563,
        longitude: 100.5018,
        created_at: "2023-11-18 10:00:00",
    };

    const farmAddress = {
        description: "Main Rice Farm",
        house_no: "456",
        street: "Farm Lane",
        village: "Riceville",
        sub_district: "Agro District",
        district: "Central Agro",
        province: "Rural Province",
        postcode: "54321",
        latitude: 15.8700,
        longitude: 100.9925,
        area: 25.5,
        created_at: "2023-11-18 10:00:00",
    };

    const field = {
        id: 1,
        farm_id: 1,
        area: 10.5,
        created_at: "2023-11-18 10:00:00",
    };

    const riceFieldData = {
        rice_variety: "Jasmine Rice",
        planting_start_date: "2023-06-01",
        harvest_date: "2023-10-30",
    };

    const fertilizationData = {
        fertilization_date: "2023-07-15",
        fertilizer_type: "Nitrogen",
        quantity_applied: 20.5,
        nitrogen_content: 10.5,
        phosphorus_content: 5.0,
        potassium_content: 3.5,
        fertilization_method: "Broadcast",
    };

    const emissionData = {
        date: "2023-07-20",
        water_volume: 150,
        methane: 2.3,
        temperature: 29.5,
        soil_moisture: 45.6,
        light_intensity: 1200,
        emission: 1.8,
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inner_container}>
                <Header />
                {/* Farmer Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Farmer</Text>
                    {Object.entries(farmer).map(([key, value]) => (
                        <Text key={key} style={styles.item}>
                            {key}: {value}
                        </Text>
                    ))}
                </View>

                {/* Home Address Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Home Address</Text>
                    {Object.entries(homeAddress).map(([key, value]) => (
                        <Text key={key} style={styles.item}>
                            {key}: {value}
                        </Text>
                    ))}
                </View>

                {/* Farm Address Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Farm Address</Text>
                    {Object.entries(farmAddress).map(([key, value]) => (
                        <Text key={key} style={styles.item}>
                            {key}: {value}
                        </Text>
                    ))}
                </View>

                {/* Field Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Field</Text>
                    {Object.entries(field).map(([key, value]) => (
                        <Text key={key} style={styles.item}>
                            {key}: {value}
                        </Text>
                    ))}
                </View>

                {/* Rice Field Data Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Rice Field Data</Text>
                    {Object.entries(riceFieldData).map(([key, value]) => (
                        <Text key={key} style={styles.item}>
                            {key}: {value}
                        </Text>
                    ))}
                </View>

                {/* Fertilization Data Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Fertilization Data</Text>
                    {Object.entries(fertilizationData).map(([key, value]) => (
                        <Text key={key} style={styles.item}>
                            {key}: {value}
                        </Text>
                    ))}
                </View>

                {/* Emission Data Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Emission Data</Text>
                    {Object.entries(emissionData).map(([key, value]) => (
                        <Text key={key} style={styles.item}>
                            {key}: {value}
                        </Text>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#f9f9f9",
        padding: 10,
    },
    inner_container: {
        backgroundColor: "#f9f9f9",
        padding: 10,
        maxHeight: SCREEN_HEIGHT * 0.9, // 150% of the screen height
        flex: 1,
    },
    section: {
        backgroundColor: "#fff",
        marginBottom: 10,
        padding: 15,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    item: {
        fontSize: 14,
        marginBottom: 5,
        color: "#555",
    },
});
