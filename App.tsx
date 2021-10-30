import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Categories } from "/components/Categories";
import { Home } from "/components/Home";
import { Random } from "/components/Random";

const Tab = createBottomTabNavigator();

export default function App() {
	const MyTheme = {
		...DarkTheme,
		colors: {
			...DarkTheme.colors,
			background: "#121212",
			text: "#FDFDFD",
		},
	};

	return (
		<NavigationContainer theme={MyTheme}>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "Home") {
							iconName = focused ? "ios-home" : "ios-home-outline";
						} else if (route.name === "Random") {
							iconName = "ios-shuffle";
						} else if (route.name === "Categories") {
							iconName = "ios-list";
						}

						return (
							<Ionicons name={iconName as string} size={size} color={color} />
						);
					},
					tabBarActiveTintColor: "#4550C5",
					tabBarInactiveTintColor: "gray",
					tabBarLabelStyle: {
						fontSize: 16,
					},
					tabBarOptions: {
						showIcon: true,
					},
					headerTitleStyle: {
						color: "#4550C5",
						fontSize: 25,
						letterSpacing: 2,
					},
				})}
			>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Categories" component={Categories} />
				<Tab.Screen name="Random" component={Random} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
