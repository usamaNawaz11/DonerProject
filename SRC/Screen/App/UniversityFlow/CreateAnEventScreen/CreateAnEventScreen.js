import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../../Component/MainContainer'
import { Style } from "./Style"
import Spacer from '../../../../Component/Spacer'
import { ResponsiveText } from '../../../../Component/ResponsiveText'

const CreateAnEventScreen = () => {
  return (
    <MainContainer>
      <View style={Style.container}>
        <Spacer />
        <ResponsiveText style={Style.text1}>Create Event Screen</ResponsiveText>
        <Spacer />
      </View>
    </MainContainer>
  )
}

export default CreateAnEventScreen

