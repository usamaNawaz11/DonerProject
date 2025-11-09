import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../../Component/MainContainer'
import { styles } from "./Style"
import { Images } from '../../../../Assets/Index'
import Spacer from '../../../../Component/Spacer'
import { HeaderButton } from "./Component/Index"
import { UseDashboard } from "./Hooks/Index"

const DashboardScreen = () => {
    const { headerButtonPress, setHeaderButtonPress } = UseDashboard()
    return (
        <MainContainer>
            <View style={styles.container}>
                <Spacer />
                <Image source={Images.profileImage} style={styles.image1} />
                <Spacer />
                <HeaderButton
                    headerPress={headerButtonPress}
                    setHeaderPress={setHeaderButtonPress}
                />
            </View>

        </MainContainer>
    )
}

export default DashboardScreen

