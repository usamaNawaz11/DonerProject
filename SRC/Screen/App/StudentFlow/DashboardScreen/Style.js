import { StyleSheet } from "react-native";
import {wp} from "../../../../Component/ResponsiveComponent"

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:wp(3)
    },
    image1:{
        width:wp(15),
        height:wp(15),
        borderRadius:wp(7.5),
        resizeMode:"contain"
    }
});
