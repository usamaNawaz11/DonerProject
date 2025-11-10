import { StyleSheet } from "react-native";
import { wp } from "../../../../Component/ResponsiveComponent";
import { Color } from "../../../../Theme/Color/Index";

export const Style = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:wp(3)
    },
    text1:{
        fontSize:20,
        color:Color.BLACK,
        fontWeight:"500",
        textAlign:"center"
    },
   
})