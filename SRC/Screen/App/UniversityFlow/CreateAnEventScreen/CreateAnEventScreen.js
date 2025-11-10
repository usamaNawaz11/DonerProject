import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../../Component/MainContainer'
import { Style } from "./Style"
import Spacer from '../../../../Component/Spacer'
import { ResponsiveText } from '../../../../Component/ResponsiveText'
import {CreateEventForm} from "./Component/Index"
import { hp } from '../../../../Component/ResponsiveComponent'
import { SimpleButton } from '../../../../Component/SimpleButton'
import { Color } from '../../../../Theme/Color/Index'

const CreateAnEventScreen = () => {
  return (
    <MainContainer>
      <View style={Style.container}>
        <Spacer />
        <ResponsiveText style={Style.text1}>Create Event Screen</ResponsiveText>
        <Spacer />
        <CreateEventForm/>
        <Spacer height={hp(1)}/>
        <SimpleButton
        textColor={Color.WHITE}
        text={"CREATE"}
        />
      </View>
    </MainContainer>
  )
}

export default CreateAnEventScreen

