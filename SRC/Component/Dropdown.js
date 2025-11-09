import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { StyleSheet } from 'react-native'
import { wp, hp } from "./ResponsiveComponent"
import { Color } from "../Theme/Color/Index"


const DropDown = ({
    items,
    value,
    setValue,
    placeholder,
    zIndex,
    setIsOpen,
    paddingVertical = hp(2),
    backgroundColor = Color.WHITE
}) => {
    const [open, setOpen] = useState(false)
    console.log("value11111111", value);

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={(openState) => {
                setOpen(openState)
                setIsOpen(openState) // Track the dropdown open state
            }}
            setValue={setValue}
            style={[styles.dropdown, { zIndex: zIndex }]}  // Apply dynamic height here
            dropDownDirection="BOTTOM"
            dropDownContainerStyle={[styles.dropdownContainer, { paddingVertical: paddingVertical }]} // Apply dynamic height to dropdown container
            textStyle={styles.dropdownText}
            placeholder={placeholder}
            listMode="SCROLLVIEW"
            arrowIconStyle={{ tintColor: Color.greeen3, marginRight: wp(2) }}
            placeholderStyle={{ backgroundColor: backgroundColor, color: Color.LIGHTGREY }}
        />
    )
}
export default DropDown

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: Color.WHITE,
        borderColor: Color.LIGHTGREY,
        borderWidth: 1.5,
        borderRadius: wp(1.8),
        width: wp(90),
        alignSelf: "center"
    },
    dropdownContainer: {
        backgroundColor: Color.WHITE,
        borderColor: Color.LIGHTGREY,
        borderWidth: 1.5,
        borderRadius: wp(3),
        width: wp(90),
        alignSelf: "center"

    },
    dropdownText: {
        color: Color.BLACK,
        fontSize: 14,
        paddingLeft: wp(2),
    },
})
