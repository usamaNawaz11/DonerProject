import { StyleSheet } from "react-native";
import { wp } from "../../../../Component/ResponsiveComponent";
import { Color } from "../../../../Theme/Color/Index";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(3)
    },
    text1: {
        fontSize: 20,
        fontWeight: "500",
        color: Color.BLACK,
        textAlign: "center"
    },
    text2:{
        fontSize:15,
        fontWeight:"400",
        color:Color.BLACK,
        textAlign:"right",
        paddingHorizontal:wp(2)
    },
    view1:{
        // flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})