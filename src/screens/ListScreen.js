import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "aaaaa"},
    { name: "bbbbb" },
    { name: "ccccc" },
    { name: "ddddd" },
    { name: "eeeee" },
    { name: "fffff" },
    { name: "ggggg" }
  ];

  return (
    <FlatList
    keyExtractor={(friend) =>friend.name }
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
