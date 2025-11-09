import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Route } from '../../Constant/Route';
import ProfileScreen from '../../Screen/App/StudentFlow/ProfileScreen/ProfileScreen';
import StudentVerificationScreen from "../../Screen/App/StudentFlow/StudentVerificationScreen/StudentVerificationScreen"


const { Navigator, Screen } = createNativeStackNavigator();

const StudentNavigation = (props) => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={Route.STUDENTVERIFICATIONSCREEN} component={StudentVerificationScreen} />

        </Navigator>
    );
};

export default StudentNavigation;