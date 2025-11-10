import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../../Component/MainContainer'
import { styles } from "./Style"
import { ResponsiveText } from '../../../../Component/ResponsiveText'
import Spacer from '../../../../Component/Spacer'
import { BoxView, EventHistory } from "./Component/Index"
import { SimpleButton } from '../../../../Component/SimpleButton'
import { wp } from '../../../../Component/ResponsiveComponent'
import { Color } from '../../../../Theme/Color/Index'
import { Route } from '../../../../Constant/Route'

const ProfileScreen = (props) => {
    console.log("profile")
    return (
        <MainContainer>
            <View style={styles.container}>
                <Spacer />
                <ResponsiveText style={styles.text1}>
                    Profile Screen
                </ResponsiveText>
                <Spacer />
                <BoxView />
                <Spacer/>
                <EventHistory/>
                <Spacer/>
                <View style={styles.view1}>
                    <SimpleButton
                        text={"Edit Profile"}
                        textColor={Color.WHITE}
                        buttonWidth={wp(45)} />
                    <SimpleButton
                        text={"Options"}
                        textColor={Color.WHITE}
                        buttonWidth={wp(45)} />
                </View>
                <Spacer/>
                <TouchableOpacity onPress={()=>props?.navigation?.navigate(Route.STUDENTNAVIGATION,{screen:Route.STUDENTVERIFICATIONSCREEN})}>
                <ResponsiveText style={styles.text2}>Verify Status?</ResponsiveText>
                </TouchableOpacity>
            </View>

        </MainContainer>
    )
}

export default ProfileScreen

