import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../../Component/MainContainer'
import { styles } from "./Style"
import { Images } from '../../../../Assets/Index'
import Spacer from '../../../../Component/Spacer'
import { BloodRequest, HeaderButton, Redeem } from "./Component/Index"
import { UseDashboard } from "./Hooks/Index"
import { ResponsiveText } from '../../../../Component/ResponsiveText'

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
                {headerButtonPress === "request" ?
                    <View>
                        <Spacer/>
                        <ResponsiveText style={styles.test1}>Available Blood Request</ResponsiveText>
                        <Spacer/>
                        <BloodRequest/>
                    </View>
                    :
                    
                    <View>
                        <Spacer/>
                        <ResponsiveText style={styles.test1}>Redeem</ResponsiveText>
                        <Spacer/>
                        <Redeem/>
                    </View>
                    
                }
            </View>

        </MainContainer>
    )
}

export default DashboardScreen

