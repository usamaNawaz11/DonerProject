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
import { Route } from '../../../Constant/Route'

const SignupScreen = (props) => {
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
                    onPress={()=>props?.navigation?.navigate(Route.LOGINSCREEN)}
                    />
                </ScrollView>
            </View>
        </MainContainer>
    )
}

export default SignupScreen

