import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { wp } from "./ResponsiveComponent";
import { Color } from "../Theme/Color/Index";

export const CustomProgressBar = ({
  progress = 3, 
  total = 5,    
  height = 8,
  backgroundColor = "#F5F5F8",
  progressColor = Color.RED,
  textColor = Color.BLACK,
}) => {
  const percentage = Math.min(progress / total, 1); 

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.track,
          { height, backgroundColor },
        ]}
      >
        <View
          style={[
            styles.fill,
            { width: `${percentage * 100}%`, backgroundColor: progressColor },
          ]}
        />
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(80),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf:"center"
  },
  track: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 10,
  },
  fill: {
    height: "100%",
    borderRadius: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
});
