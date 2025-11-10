import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResponsiveText } from '../../../../../Component/ResponsiveText'
import { Color } from '../../../../../Theme/Color/Index'
import { hp, wp } from '../../../../../Component/ResponsiveComponent'
import { DonorList, DummyEvent, RequestRewards } from '../../../../../Dummy/Index'
import Spacer, { HorizontalSpacer } from '../../../../../Component/Spacer'
import UniversityIcon from "../../../../../Assets/Svg/UniversityIcon"

export const RewardType = () => {
    return (
        <View style={styles.view1}>
            <FlatList
                data={RequestRewards}
                keyExtractor={(item, index) => item.id.toString()}
                ItemSeparatorComponent={<Spacer height={hp(1)} />}
                ListHeaderComponent={() => {
                    return (
                        <View style={styles.view2}>
                           <ResponsiveText style={[styles.text3,{fontWeight:"800"}]}>Name</ResponsiveText>
                           <ResponsiveText style={[styles.text3,{fontWeight:"800"}]}>Reward Type</ResponsiveText>
                           <ResponsiveText style={[styles.text3,{fontWeight:"800"}]}>Action</ResponsiveText>
                        </View>
                    )
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.view2}>
                            <ResponsiveText numberOfLines={1} style={styles.text3}>{item.Name}</ResponsiveText>
                            <ResponsiveText numberOfLines={1} style={styles.text3}>{item.RewardType}</ResponsiveText>
                            <ResponsiveText numberOfLines={1} style={styles.text3}>{item.Active}</ResponsiveText>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export const TopDonor = () => {
    return (
        <View style={styles.view1}>
            <FlatList
                data={DonorList}
                keyExtractor={(item, index) => item.id.toString()}
                ListHeaderComponent={() => {
                    return (
                        <View style={styles.view3}>
                            <ResponsiveText style={[styles.text3,{fontWeight:"800"}]}>Name</ResponsiveText>
                            <ResponsiveText style={[styles.text3,{fontWeight:"800"}]}>ID</ResponsiveText>
                        </View>
                    )
                }}
                ItemSeparatorComponent={<Spacer height={hp(1)} />}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.view3}>
                            <ResponsiveText numberOfLines={1} style={styles.text3}>{item.Name}</ResponsiveText>
                            <ResponsiveText numberOfLines={1} style={styles.text3}>{item.id}</ResponsiveText>
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
        width: wp(30)
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
    view3: {
        width: wp(90),
        borderBottomWidth: 1,
        borderColor: Color.LIGHTGREY,
        borderRadius: wp(3),
        paddingHorizontal: wp(2),
        padding: wp(3),
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center"
    },
})