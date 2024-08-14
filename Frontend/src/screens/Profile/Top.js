import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Top = () => {
  return (
    <View style={styles.icons}>
      {/* <TouchableOpacity style={styles.back}>
      <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.back}>
        {<AntDesign name="arrowright" size={24} color="black" />}
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  back: {
    backgroundColor: "blue",
    width: 45,
    height: 45,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Top;
