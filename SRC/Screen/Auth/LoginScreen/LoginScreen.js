import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from "../../../Component/MainContainer"
import { styles } from "./Style"
import { Images } from "../../../Assets/Index"
import { ResponsiveText } from "../../../Component/ResponsiveText"
import Spacer from "../../../Component/Spacer"
import { HeaderButton, StudentLoginForm, UniversityLoginForm } from "./Component/Index"
import { UseLogin } from "./Hooks/Index"
import { hp } from '../../../Component/ResponsiveComponent'
import { Route } from '../../../Constant/Route'

const LoginScreen = (props) => {
  const { headerButtonPress, setHeaderButtonPress } = UseLogin()
  return (
    <MainContainer>
      <View style={styles.container}>
        <Image source={Images.LogoImage} style={styles.image1} />
        <ResponsiveText style={styles.text1}>Campus Blood Donation</ResponsiveText>
        <Spacer />
        <HeaderButton
          headerPress={headerButtonPress}
          setHeaderPress={setHeaderButtonPress}
        />
        <Spacer height={hp(5)} />
        {headerButtonPress === "student" ?
          <StudentLoginForm
            SignupPress={() => props?.navigation?.navigate(Route.SIGNUPSCREEN)}
            LoginPress={()=>props?.navigation?.navigate(Route.BOTTOMNAVIGATION,{screen:Route.PROFILESCREEN})}
          />
          :
          <UniversityLoginForm />
        }
      </View>
    </MainContainer>
  )
}

export default LoginScreen

