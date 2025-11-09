import { StyleSheet, TouchableOpacity, View } from "react-native";
import {Color} from "../../../../../Theme/Color/Index"
import {ResponsiveText} from "../../../../../Component/ResponsiveText"
import {wp} from "../../../../../Component/ResponsiveComponent"

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