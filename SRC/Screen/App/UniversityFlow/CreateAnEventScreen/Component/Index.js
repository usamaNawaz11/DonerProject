import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResponsiveText } from '../../../../../Component/ResponsiveText'
import { Color } from '../../../../../Theme/Color/Index'
import InputText from '../../../../../Component/InputText'
import { hp, wp } from '../../../../../Component/ResponsiveComponent'
import Spacer from '../../../../../Component/Spacer'


export const CreateEventForm = () => {
    return (
        <View>
            <ResponsiveText style={styles.text1}>Title</ResponsiveText>
            <Spacer height={hp(1)} />
            <InputText placeholder={"Enter Title"} />
            <Spacer height={hp(1)} />
            <ResponsiveText style={styles.text1}>Place Of Donation</ResponsiveText>
            <Spacer height={hp(1)} />
            <InputText placeholder={"Enter Place Of Donation"} />
             <Spacer height={hp(1)} />
            <ResponsiveText style={styles.text1}>Event Detail</ResponsiveText>
            <Spacer height={hp(1)} />
            <InputText placeholder={"Enter Event Detail"} />
             <Spacer height={hp(1)} />
            <ResponsiveText style={styles.text1}>Available Reward</ResponsiveText>
            <Spacer height={hp(1)} />
            <InputText placeholder={"Enter Available Reward"} />
        </View>
    )
}


const styles = StyleSheet.create({
    text1: {
        fontSize: 15,
        color: Color.BLACK,
        fontWeight: "400",
        paddingHorizontal: wp(2)
    }

})