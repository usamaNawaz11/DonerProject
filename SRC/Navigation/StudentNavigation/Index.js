import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Route } from '../../Constant/Route';
import StudentVerificationScreen from "../../Screen/App/StudentFlow/StudentVerificationScreen/StudentVerificationScreen"
import EventSignupScreen from "../../Screen/App/StudentFlow/EventSignupScreen/EventSignupScreen"


const { Navigator, Screen } = createNativeStackNavigator();

const StudentNavigation = (props) => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={Route.STUDENTVERIFICATIONSCREEN} component={StudentVerificationScreen} />
            <Screen name={Route.STUDENTEVENTSIGNUPSCREEN} component={EventSignupScreen} />

        </Navigator>
    );
};

export default StudentNavigation;