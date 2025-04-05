import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Home 화면이에요!</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // 배경은 화이트 🤍
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333", // 어두운 텍스트 🌑
  },
});
