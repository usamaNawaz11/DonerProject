import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../../Component/MainContainer'
import {Style} from "./Style"
import { ResponsiveText } from '../../../../Component/ResponsiveText'
import Spacer from '../../../../Component/Spacer'
import {ActiveEvent, RecentDonorList} from "./Component/Index"

const UniversityDashboardScreen = () => {
  return (
    <MainContainer>
        <View style={Style.container}>
            <Spacer/>
            <ResponsiveText style={Style.text1}>University Dashboard</ResponsiveText>
            <Spacer/>
            <View>
                <ActiveEvent/>
            </View>
            <Spacer/>
            <View>
                <RecentDonorList/>
            </View>
        </View>

    </MainContainer>
  )
}

export default UniversityDashboardScreen

