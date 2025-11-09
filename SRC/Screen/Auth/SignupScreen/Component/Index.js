import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../../../Theme/Color/Index'
import { hp, wp } from '../../../../Component/ResponsiveComponent'
import { ResponsiveText } from '../../../../Component/ResponsiveText'
import InputText from '../../../../Component/InputText'
import Spacer from '../../../../Component/Spacer'

export const SignupForm = () => {
    return (
        <View style={styles.Signuptainer}>
            <View>
                <ResponsiveText style={styles.text2}>Name</ResponsiveText>
                <Spacer height={hp(1)} />
                <InputText placeholder={"Enter userName"} />
            </View>
            <Spacer />
            <View>
                <ResponsiveText style={styles.text2}>Email</ResponsiveText>
                <Spacer height={hp(1)} />
                <InputText placeholder={"Enter Email"} />
            </View>
            <Spacer />
            <View>
                <ResponsiveText style={styles.text2}>Student Id</ResponsiveText>
                <Spacer height={hp(1)} />
                <InputText placeholder={"Enter StudentId"} />
            </View>
            <Spacer />
            <View>
                <ResponsiveText style={styles.text2}>Enter Password</ResponsiveText>
                <Spacer height={hp(1)} />
                <InputText placeholder={"Enter Password"} />
            </View>
            <Spacer/>
             <View>
                <ResponsiveText style={styles.text2}>Confirm Password</ResponsiveText>
                <Spacer height={hp(1)} />
                <InputText placeholder={"Confirm Password"} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Signuptainer: {
        // flex: 1,
        justifyContent: "center",
    },
    text2: {
        fontSize: 14,
        fontWeight: "400",
        color: Color.BLACK,
        paddingHorizontal: wp(2)
    },
})