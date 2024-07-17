import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [changeDirection, setChangeDirection] = useState("flex-start");

  function handleButtonClick(position) {
    setChangeDirection(position);
  }

  return (
    <View style={[styles.container]}>
      <View style={{ flex: 1, justifyContent: changeDirection }}>
        <StatusBar style="auto" />
        <View style={styles.box1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => handleButtonClick("flex-start")}
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#523857" },
          ]}
        >
          <Text style={styles.buttonText}>flex-start</Text>
        </Pressable>
        <Pressable
          onPress={() => handleButtonClick("flex-end")}
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#523857" },
          ]}
        >
          <Text style={styles.buttonText}>flex-end</Text>
        </Pressable>
        <Pressable
          onPress={() => handleButtonClick("center")}
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#523857" },
          ]}
        >
          <Text style={styles.buttonText}>center</Text>
        </Pressable>
        <Pressable
          onPress={() => handleButtonClick("space-between")}
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#523857" },
          ]}
        >
          <Text style={styles.buttonText}>space-between</Text>
        </Pressable>
        <Pressable
          onPress={() => handleButtonClick("space-around")}
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#523857" },
          ]}
        >
          <Text style={styles.buttonText}>space-around</Text>
        </Pressable>
        <Pressable
          onPress={() => handleButtonClick("space-evenly")}
          style={({ pressed }) => [
            styles.button,
            pressed && { backgroundColor: "#523857" },
          ]}
        >
          <Text style={styles.buttonText}>space-evenly</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: "#FCE0D5",
  },

  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },

  box1: {
    height: 100,
    width: 200,
    backgroundColor: "#D39CBD",
    justifyContent: "center",
  },
  box2: {
    height: 100,
    width: 200,
    backgroundColor: "#995E7C",
    justifyContent: "center",
  },
  box3: {
    height: 100,
    width: 200,
    backgroundColor: "#683142",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 10,
    padding: 5,
    backgroundColor: "#9783A9",
  },

  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },

  buttonContainer: {
    gap: 20,
  },
});
