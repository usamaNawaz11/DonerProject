import { StyleSheet } from "react-native";
import { wp } from "../../../../Component/ResponsiveComponent"
import { Color } from "../../../../Theme/Color/Index";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(3)
    },
    image1: {
        width: wp(30),
        height: wp(30),
        resizeMode: "contain",
        alignSelf: "center"
    },
    text1: {
        fontSize: 20,
        fontWeight: "500",
        color: Color.BLACK,
        textAlign: "center"
    },
})