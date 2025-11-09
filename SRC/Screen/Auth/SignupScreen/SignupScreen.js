import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../Component/MainContainer'
import { styles } from "./Style"
import { ResponsiveText } from '../../../Component/ResponsiveText'
import Spacer from '../../../Component/Spacer'
import { SignupForm } from "./Component/Index"
import { UseSignUpScreen } from "./Hooks/Index"
import { SimpleButton } from '../../../Component/SimpleButton'
import { Color } from '../../../Theme/Color/Index'

const SignupScreen = () => {
    const { isDropDownOpen, setIsDropDownOpen, selectedUniversity, setSelectedUniversity } = UseSignUpScreen()
    return (
        <MainContainer>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <Spacer />
                    <ResponsiveText style={styles.text1}>Create An Account</ResponsiveText>
                    <Spacer />
                    <SignupForm
                        selectedUniversity={selectedUniversity}
                        setDropDownOpen={setIsDropDownOpen}
                        setSelectedUniversity={setSelectedUniversity}
                    />
                    <Spacer/>
                    <SimpleButton
                    textColor={Color.WHITE}
                    text={"SignUp"}
                    />
                </ScrollView>
            </View>
        </MainContainer>
    )
}

export default SignupScreen

