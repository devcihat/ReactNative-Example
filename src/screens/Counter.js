import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Text>Count : {state.count}</Text>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      >
        Arttır
      </Button>
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      >
        Azalt
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Counter;
