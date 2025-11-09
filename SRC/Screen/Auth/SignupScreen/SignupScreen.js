import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../Component/MainContainer'
import { styles } from "./Style"
import { ResponsiveText } from '../../../Component/ResponsiveText'
import Spacer from '../../../Component/Spacer'
import { SignupForm } from "./Component/Index"

const SignupScreen = () => {
    return (
        <MainContainer>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
                    <Spacer />
                    <ResponsiveText style={styles.text1}>Create An Account</ResponsiveText>
                    <Spacer />
                    <SignupForm />
                </ScrollView>

            </View>
        </MainContainer>
    )
}

export default SignupScreen

