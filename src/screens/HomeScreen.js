import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go To Components Demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go To Image Demo"
      ></Button>
       <Button
        onPress={() => navigation.navigate("Count")}
        title="Go To Counter Demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("TextS")}
        title="Go To TextScreen Demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Go To BoxScreen Demo"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
