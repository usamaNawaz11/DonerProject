import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../../Component/MainContainer'
import { Style } from "./Style"
import Spacer from '../../../../Component/Spacer'
import { ResponsiveText } from '../../../../Component/ResponsiveText'
import { BloodTypeBox } from './Component/Index'
import { SimpleButton } from '../../../../Component/SimpleButton'
import { hp } from '../../../../Component/ResponsiveComponent'
import { Color } from '../../../../Theme/Color/Index'
import { Route } from '../../../../Constant/Route'


const UniversityReportScren = (props) => {
    return (
        <MainContainer>
            <View style={Style.container}>
                <Spacer />
                <ResponsiveText style={Style.text1}>Student Report Screen</ResponsiveText>
                <Spacer />
                <View style={Style.view1}>
                    <View>
                        <ResponsiveText style={Style.text2}>Total Donors</ResponsiveText>
                        <ResponsiveText style={Style.text3}>100</ResponsiveText>
                    </View>
                    <View>
                        <ResponsiveText style={Style.text2}>Total Donation</ResponsiveText>
                        <ResponsiveText style={Style.text3}>100</ResponsiveText>
                    </View>
                </View>
                <Spacer />
                <BloodTypeBox />
                <Spacer height={hp(10)} />
                <SimpleButton
                    textColor={Color.WHITE}
                    text={"Create Event"}
                    onPress={()=>props?.navigation?.navigate(Route.STACKNAVIGATION,{screen:Route.UNIVERSITYCREATEEVENTSCREEEN})}
                />
            </View>

        </MainContainer>
    )
}

export default UniversityReportScren

