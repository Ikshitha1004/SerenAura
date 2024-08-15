import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";


const ProfileScreen= () =>{
  return (
    <>
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
        <View style={styles.container}>
          <Top />
          <Middle />
          <Bottom />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    resizeMode : "cover",
  },
  container:{
     //marginHorizontal : medium,
    //  marginTop: Sizes.safe,
  },
});

export default ProfileScreen;