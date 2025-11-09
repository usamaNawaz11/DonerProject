import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from "../../../../../Component/ResponsiveComponent"
import { Color } from "../../../../../Theme/Color/Index"
import { ResponsiveText } from '../../../../../Component/ResponsiveText'
import { Images } from '../../../../../Assets/Index'
import Spacer, { HorizontalSpacer } from '../../../../../Component/Spacer'

export const BoxView = () => {
    return (
        <View style={styles.view1}>
            <ResponsiveText style={styles.text1}>Personal Information</ResponsiveText>
            <Spacer />
            <View style={styles.view2}>
                <Image style={styles.logo} source={Images.profileImage} />
                <HorizontalSpacer width={wp(10)} />
                <View style={{width:wp(45)}}>
                    <ResponsiveText style={styles.text2}>Testing User</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={styles.text2}>testing1234</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={styles.text2} numberOfLines={1}>testing0018788@gmail.com</ResponsiveText>
                    <Spacer height={hp(1)} />
                </View>
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
        paddingHorizontal: wp(2)
    },
    text1: {
        fontSize: 15,
        fontWeight: "500",
        color: Color.BLACK
    },
    view2: {
        width: wp(80),
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        width: wp(30),
        height: wp(30),
        resizeMode: "contain"
    },
    text2: {
        fontSize: 16,
        fontWeight: "400",
        color: Color.BLACK
    }
})