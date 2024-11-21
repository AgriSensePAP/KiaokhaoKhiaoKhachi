import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function HourlyGraph() {
  const screenWidth = Dimensions.get("window").width;
  const [isMobile, setIsMobile] = useState(Dimensions.get("window").width < 768);

  useEffect(() => {
    const interval = setInterval(() => {
      const { width } = Dimensions.get("window");
      setIsMobile(width < 768);
      console.log("isMobile refreshed:", width < 768);
    }, 1000); // Refresh every 1 second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);


  // Function to generate random data values
  const getRandomValue = (min, max) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  };

  // Generate x-axis labels for every hour
  const generateXLabels = () => {
    const labels = [];
    const startTime = new Date();
    startTime.setHours(6, 0, 0, 0); // Start at 6:00 AM
    for (let i = 0; i <= 24; i+=3) {
      const currentHour = new Date(startTime.getTime() + i * 60 * 60 * 1000); // Increment by an hour
      const hours = currentHour.getHours();
      const ampm = hours >= 12 ? "PM" : "AM";
      const label = `${hours % 12 || 12} ${ampm}`; // Format as "6 AM", "7 AM", etc.
      labels.push(label);
    }
    return labels;
  };

  const xLabels = generateXLabels();

  // State for dynamic data
  const [graphData, setGraphData] = useState([]);
  const [currentSecond, setCurrentSecond] = useState(0);

  useEffect(() => {
    // Update graph data every second
    const interval = setInterval(() => {
      setGraphData((prevData) => [
        ...prevData,
        getRandomValue(4, 117), // Add a new random value
      ]);
      setCurrentSecond((prevSecond) => prevSecond + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Group data into hourly averages for graph display
  const groupedData = [];
  for (let i = 0; i < xLabels.length; i++) {
    const hourData = graphData.slice(i * 3600, (i + 1) * 3600); // Data for the current hour
    if (hourData.length > 0) {
      const average = hourData.reduce((a, b) => a + b, 0) / hourData.length; // Average data per hour
      groupedData.push(average);
    } else {
      groupedData.push(0); // Replace `null` with `0`
    }
  }

  // Data structure for the chart
  const chartData = {
    labels: xLabels, // Hourly intervals
    datasets: [
      {
        data: groupedData, // Grouped data by hour
        color: (opacity = 1) => `rgba(75, 192, 192, ${opacity})`, // Line color
        strokeWidth: 2, // Line thickness
      },
    ],
    legend: ["Methane (g/m²)"], // Legend
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Methane Over the Day</Text>
      <LineChart
        data={chartData}
        width={isMobile ? screenWidth * 0.9 : screenWidth * 0.45}
        height={250}
        chartConfig={{
          backgroundGradientFrom: "#f0f0f0",
          backgroundGradientTo: "#f0f0f0",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Line color
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#3b82f6",
          },
        }}
        bezier
        style={styles.chart}
      />
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  chart: {
    borderRadius: 16,
  },
});
