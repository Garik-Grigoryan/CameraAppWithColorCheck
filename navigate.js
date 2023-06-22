import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Main from './components/Main'
import Tests from './components/Tests'
const Tab = createBottomTabNavigator();
export default function Navigate(){
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='main' component={Main} />
            <Tab.Screen name='Tests' component={Tests} />
        </Tab.Navigator>
    </NavigationContainer>;
}
