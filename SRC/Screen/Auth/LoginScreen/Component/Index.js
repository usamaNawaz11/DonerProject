import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from '../../../../Component/ResponsiveComponent';
import { Color } from '../../../../Theme/Color/Index';
import { ResponsiveText } from '../../../../Component/ResponsiveText';
import InputText from "../../../../Component/InputText"
import Spacer from '../../../../Component/Spacer';
import { SimpleButton } from "../../../../Component/SimpleButton"

export const HeaderButton = ({ headerPress, setHeaderPress }) => {
    return (
        <View style={styles.headerView}>
            <TouchableOpacity
                onPress={() => setHeaderPress('student')}
                activeOpacity={0.8}
                style={[
                    styles.button,
                    {
                        backgroundColor:
                            headerPress === 'student' ? Color.RED : Color.WHITE,
                    },
                ]}
            >
                <ResponsiveText
                    style={[
                        styles.text,
                        { color: headerPress === 'student' ? Color.WHITE : Color.BLACK },
                    ]}
                >
                    Student
                </ResponsiveText>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setHeaderPress('university')}
                activeOpacity={0.8}
                style={[
                    styles.button,
                    {
                        backgroundColor:
                            headerPress === 'university' ? Color.RED : Color.WHITE,
                    },
                ]}
            >
                <ResponsiveText
                    style={[
                        styles.text,
                        { color: headerPress === 'university' ? Color.WHITE : Color.BLACK },
                    ]}
                >
                    University
                </ResponsiveText>
            </TouchableOpacity>
        </View>
    );
};

export const StudentLoginForm = ({SignupPress}) => {
    return (
        <View style={styles.loginContainer}>
            <View>
                <ResponsiveText style={styles.text2}>Email</ResponsiveText>
                <InputText placeholder="Enter your email" />
            </View>
            <Spacer />
            <View>
                <ResponsiveText style={styles.text2}>Password</ResponsiveText>
                <InputText placeholder="Enter your password" secureTextEntry />
            </View>
            <Spacer height={hp(1)} />
            <TouchableOpacity>
                <ResponsiveText style={[styles.text3, { textAlign: "right", paddingHorizontal: wp(2) }]}>Forget Password?</ResponsiveText>
            </TouchableOpacity>
            <Spacer />
            <View style={{ alignSelf: "center" }}>
                <SimpleButton
                    backgroundColor={Color.RED}
                    textColor={Color.WHITE}
                    text={"Login"}
                    buttonWidth={wp(90)}
                />
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <ResponsiveText style={styles.text3}>Dont have an Account?</ResponsiveText>
                    <TouchableOpacity onPress={SignupPress}>
                        <ResponsiveText style={[styles.text3, { color: Color.RED }]}>Signup</ResponsiveText>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};
export const UniversityLoginForm = () => {
    return (
        <View style={styles.loginContainer}>
            <View>
                <ResponsiveText style={styles.text2}>Email</ResponsiveText>
                <InputText placeholder="Enter your email" />
            </View>
            <Spacer />
            <View>
                <ResponsiveText style={styles.text2}>Password</ResponsiveText>
                <InputText placeholder="Enter your password" secureTextEntry />
            </View>
          
            <Spacer />
            <View style={{ alignSelf: "center" }}>
                <SimpleButton
                    backgroundColor={Color.RED}
                    textColor={Color.WHITE}
                    text={"Login"}
                    buttonWidth={wp(90)}
                />
               
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    headerView: {
        width: wp(90),
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: Color.LIGHTGREY,
        borderRadius: wp(2),
        // overflow: 'hidden',
    },
    button: {
        flex: 1,
        paddingVertical: wp(3),
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
    },
    loginContainer: {
        // flex: 1,
        justifyContent: "center",
    },
    text2: {
        fontSize: 14,
        fontWeight: "400",
        color: Color.BLACK,
        paddingHorizontal: wp(2)
    },
    text3: {
        fontSize: 14,
        fontWeight: "400",
        color: Color.BLACK
    }
});
