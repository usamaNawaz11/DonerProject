import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MainContainer } from "../../../../Component/MainContainer"
import { styles } from "./Style"
import { Images } from '../../../../Assets/Index'
import Spacer from '../../../../Component/Spacer'
import { hp } from '../../../../Component/ResponsiveComponent'
import { ResponsiveText } from '../../../../Component/ResponsiveText'
import InputText from '../../../../Component/InputText'
import DropDown from '../../../../Component/Dropdown'
import { UniversityName } from '../../../../Dummy/Index'
import { SimpleButton } from '../../../../Component/SimpleButton'
import { Color } from '../../../../Theme/Color/Index'

const StudentVerificationScreen = (props) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const [selectedUniversity, setSelectedUniversity] = useState("")
    return (
        <MainContainer>
            <View style={styles.container}>
                <Spacer height={hp(8)} />
                <Image source={Images.LogoImage} style={styles.image1} />
                <View>
                    <ResponsiveText style={styles.text1}>Enrollment Id</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <InputText />
                    <Spacer height={hp(1)} />
                    <ResponsiveText style={styles.text1}>Select University</ResponsiveText>
                    <Spacer height={hp(1)} />
                    <DropDown
                        setIsOpen={setIsDropDownOpen}
                        placeholder={"Select University"}
                        items={UniversityName}
                        value={selectedUniversity}
                        setValue={setSelectedUniversity}
                    />
                </View>
                <Spacer height={hp(8)} />
                <SimpleButton
                textColor={Color.WHITE}
                text={"Submit"}
                onPress={()=>props?.navigation?.goBack()}
                />
            </View>

        </MainContainer>
    )
}

export default StudentVerificationScreen

