import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Color } from "../../../../../Theme/Color/Index"
import { ResponsiveText } from "../../../../../Component/ResponsiveText"
import { hp, wp } from "../../../../../Component/ResponsiveComponent"
import { DummyRequest, RedeemOption } from "../../../../../Dummy/Index";
import Spacer from "../../../../../Component/Spacer";

export const HeaderButton = ({ headerPress, setHeaderPress }) => {
    return (
        <View style={styles.headerView}>
            <TouchableOpacity
                onPress={() => setHeaderPress('request')}
                activeOpacity={0.8}
                style={[
                    styles.button,
                    {
                        backgroundColor:
                            headerPress === 'request' ? Color.RED : Color.WHITE,
                    },
                ]}
            >
                <ResponsiveText
                    style={[
                        styles.text,
                        { color: headerPress === 'request' ? Color.WHITE : Color.BLACK },
                    ]}
                >
                    Request
                </ResponsiveText>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setHeaderPress('redeem')}
                activeOpacity={0.8}
                style={[
                    styles.button,
                    {
                        backgroundColor:
                            headerPress === 'redeem' ? Color.RED : Color.WHITE,
                    },
                ]}
            >
                <ResponsiveText
                    style={[
                        styles.text,
                        { color: headerPress === 'redeem' ? Color.WHITE : Color.BLACK },
                    ]}
                >
                    Redeem
                </ResponsiveText>
            </TouchableOpacity>
        </View>
    );
};

export const BloodRequest = ({onpress}) => {
    return (
        <View>
            <FlatList
                data={DummyRequest}
                keyExtractor={(item, index) => item.id.toString()}
                ItemSeparatorComponent={<Spacer height={hp(1)} />}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.view1}>
                            <View>
                                <ResponsiveText style={styles.tex2}>{item.universityName}</ResponsiveText>
                                <Spacer height={hp(1)}/>
                                <ResponsiveText style={styles.tex3}>{item.eventDate}</ResponsiveText>
                            </View>
                            <TouchableOpacity onPress={onpress}>
                                <ResponsiveText style={[styles.tex3,{color:Color.RED}]}>Signup</ResponsiveText>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export const Redeem = () => {
    return (
        <View>
            <FlatList
                data={RedeemOption}
                keyExtractor={(item, index) => item.id.toString()}
                ItemSeparatorComponent={<Spacer height={hp(1)} />}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.view1}>
                            <View>
                                <ResponsiveText style={styles.tex2}>{item.universityName}</ResponsiveText>
                                <Spacer height={hp(1)}/>
                                <ResponsiveText style={styles.tex3}>{item.redeemItem}</ResponsiveText>
                            </View>
                            <TouchableOpacity>
                                <ResponsiveText style={[styles.tex3,{color:Color.RED}]}>Redeem</ResponsiveText>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}
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
    tex2: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        color: Color.BLACK
    },
    tex3: {
        fontSize: 14,
        fontWeight: '500',
        color: Color.LIGHTGREY
    },
    view1: {
        width: wp(90),
        borderWidth: 1,
        borderColor: Color.LIGHTGREY,
        borderRadius: wp(3),
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: wp(3)
    }



});