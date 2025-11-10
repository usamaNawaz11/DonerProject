import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../../Component/MainContainer'
import { Style } from "./Style"
import Spacer from '../../../../Component/Spacer'
import { ResponsiveText } from '../../../../Component/ResponsiveText'
import { RewardType, TopDonor } from "./Component/Index"

const UniversityRewardScreen = () => {
    return (
        <MainContainer>
            <View style={Style.container}>
                <Spacer />
                <ResponsiveText style={Style.text1}>Student Request Rewards</ResponsiveText>
                <Spacer />
                <RewardType />
                <Spacer />
                <ResponsiveText style={Style.text1}>Top Donor</ResponsiveText>
                <Spacer/>
                <TopDonor/>
            </View>
        </MainContainer>
    )
}

export default UniversityRewardScreen

