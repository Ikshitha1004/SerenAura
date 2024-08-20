// components/MenuButton.js
import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const MenuButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <View style={styles.container}>
       
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginTop: 15,
  },
});

export default MenuButton;