import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from "../../../../Component/MainContainer"
import { styles } from "./Style"
import Spacer from '../../../../Component/Spacer'
import { Images } from '../../../../Assets/Index'
import { hp } from '../../../../Component/ResponsiveComponent'
import { ResponsiveText } from '../../../../Component/ResponsiveText'
import {EventInfo, EventRequired} from "./Component/Index"
import { SimpleButton } from '../../../../Component/SimpleButton'
import { Color } from '../../../../Theme/Color/Index'

const EventSignupScreen = () => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <Spacer />
        <ResponsiveText style={styles.text1}>Event Signup</ResponsiveText>
        <Spacer height={hp(5)} />
        <Image source={Images.LogoImage} style={styles.image1} />
        <ResponsiveText style={styles.text1}>Blood Donation Event</ResponsiveText>
        <Spacer/>
        <EventInfo/>
        <Spacer/>
        <EventRequired/>
        <Spacer height={hp(5)}/>
        <SimpleButton
        textColor={Color.WHITE}
        text={"Submit Registration"}
        />
      </View>
    </MainContainer>
  )
}

export default EventSignupScreen

