import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../../../../Theme/Color/Index'
import { ResponsiveText } from '../../../../../Component/ResponsiveText'
import { wp } from '../../../../../Component/ResponsiveComponent'
import { CustomProgressBar } from "../../../../../Component/CustomProgressBar"
import Spacer from '../../../../../Component/Spacer'

export const EventInfo = () => {
  return (
    <View style={styles.view1}>
      <View style={styles.view3}>
        <View style={styles.view2}>
          <ResponsiveText style={styles.text1}>Date</ResponsiveText>
          <ResponsiveText style={styles.text1}>Time</ResponsiveText>
          <ResponsiveText style={styles.text1}>Location</ResponsiveText>
        </View>
        <View style={styles.view2}>
          <ResponsiveText style={styles.text1}>2025-08-04</ResponsiveText>
          <ResponsiveText style={styles.text1}>09:00 - 17:00</ResponsiveText>
          <ResponsiveText style={styles.text1}>Attock</ResponsiveText>
        </View>

      </View>
      <View style={styles.view3}>
        <ResponsiveText style={[styles.text1, { width: wp(40) }]}>Capacity</ResponsiveText>
        <ResponsiveText style={[styles.text1, { width: wp(40) }]}>90/100 Spots</ResponsiveText>
      </View>
      <Spacer />
      <CustomProgressBar progress={90} total={100} />
    </View>
  )
}

export const EventRequired = () => {
  return (
    <View style={styles.view1}>
      <ResponsiveText style={styles.text2}>Required Information</ResponsiveText>
      <View>
        <ResponsiveText style={styles.text1}>1. Age 18-60</ResponsiveText>
        <ResponsiveText style={styles.text1}>
          {`2. Weight ≤ 40`}
        </ResponsiveText>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  view1: {
    width: wp(90),
    borderWidth: 1,
    borderColor: Color.LIGHTGREY,
    borderRadius: wp(3),
    alignSelf: "center",
    padding: wp(2),
    paddingHorizontal: wp(2),

  },
  text1: {
    fontSize: 15,
    color: Color.BLACK,
    fontWeight: "400"
  },
  view2: {
    width: wp(40),

  },
  view3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center'
  },
  text2: {
    fontSize: 18,
    fontWeight: "500",
    color: Color.BLACK,
    textAlign: "center"
  },
})