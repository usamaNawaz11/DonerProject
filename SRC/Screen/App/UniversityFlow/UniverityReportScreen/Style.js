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
    text2:{
        fontSize:17,
        color:Color.BLACK,
        fontWeight:"500",
        textAlign:"center"
    },
      text3:{
        fontSize:14,
        color:Color.BLACK,
        fontWeight:"300",
        textAlign:"center"
    },
    view1:{
        // flex:1,
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        width:wp(90)
    }
   
})