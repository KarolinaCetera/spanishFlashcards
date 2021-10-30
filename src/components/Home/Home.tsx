import React from "react";
import { Button, View } from "react-native";
import { CustomText } from "UI";

interface Navigation {
	navigation: { navigate: (route: string) => void };
}

export const Home = ({ navigation }: Navigation) => {
	// passing props to components - as secons argument in navigation.navigate

	return (
		<View>
			<CustomText>This is home!</CustomText>
			<Button
				title="Go Categories Screen"
				onPress={() => navigation.navigate("Categories")}
			/>
			<Button
				title="Go Random Screen baby"
				onPress={() => navigation.navigate("Random")}
			/>
		</View>
	);
};
