import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from "./AuthNavigation/Index";
import { Route } from "../Constant/Route";



const Navigation = () => {

    const Stack = createNativeStackNavigator()


    return (
        <NavigationContainer >
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Route.AUTHNAVIGATION} component={AuthNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
