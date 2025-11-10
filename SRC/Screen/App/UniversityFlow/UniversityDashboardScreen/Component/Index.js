import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResponsiveText } from '../../../../../Component/ResponsiveText'
import { Color } from '../../../../../Theme/Color/Index'
import { hp, wp } from '../../../../../Component/ResponsiveComponent'
import { DonorList, DummyEvent } from '../../../../../Dummy/Index'
import Spacer, { HorizontalSpacer } from '../../../../../Component/Spacer'
import UniversityIcon from "../../../../../Assets/Svg/UniversityIcon"

export const ActiveEvent = () => {
    return (
        <View style={styles.view1}>
            <ResponsiveText style={styles.text1}>Active Events</ResponsiveText>
            <FlatList
                data={DummyEvent}
                keyExtractor={(item, index) => item.id.toString()}
                ItemSeparatorComponent={<Spacer height={hp(1)} />}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.view2}>
                            <UniversityIcon size={30} color={Color.RED} />
                            <HorizontalSpacer />
                            <ResponsiveText style={styles.text2}>{item.eventName}</ResponsiveText>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export const RecentDonorList = () => {
    return (
        <View style={styles.view1}>
            <ResponsiveText style={styles.text1}>Recent Donor List</ResponsiveText>
            <FlatList
                data={DonorList}
                keyExtractor={(item, index) => item.id.toString()}
                ListHeaderComponent={() => {
                    return (
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: wp(2) }}>
                            <ResponsiveText style={styles.text2}>Name</ResponsiveText>
                            <ResponsiveText style={styles.text2}>Age</ResponsiveText>
                            <ResponsiveText style={styles.text2}>BloodGroup</ResponsiveText>
                        </View>
                    )
                }}
                ItemSeparatorComponent={<Spacer height={hp(1)} />}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.view2}>
                            <ResponsiveText numberOfLines={1} style={styles.text3}>{item.Name}</ResponsiveText>
                            <ResponsiveText numberOfLines={1} style={styles.text3}>{item.age}</ResponsiveText>
                            <ResponsiveText numberOfLines={1} style={styles.text3}>{item.BloodGroup}</ResponsiveText>
                        </View>
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    text2: {
        fontSize: 15,
        fontWeight: "400",
        color: Color.BLACK
    },
    text3: {
        fontSize: 15,
        fontWeight: "400",
        color: Color.BLACK,
        width: wp(34)
    },
    text1: {
        fontSize: 18,
        fontWeight: "500",
        color: Color.BLACK,
        textAlign: "center"
    },
    view1: {
        width: wp(90),
        borderWidth: 1,
        borderColor: Color.LIGHTGREY,
        borderRadius: wp(3),
        alignSelf: "center",
        paddingHorizontal: wp(2),
        height: hp(28)
    },
    view2: {
        width: wp(90),
        borderBottomWidth: 1,
        borderColor: Color.LIGHTGREY,
        borderRadius: wp(3),
        paddingHorizontal: wp(2),
        padding: wp(3),
        flexDirection: "row",
        // justifyContent:"space-between",
        alignItems: "center"
    },
})