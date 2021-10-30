import React from "react";
import { StyleSheet, View } from "react-native";
import { CustomButton, CustomText, Tile } from "UI";

interface Navigation {
	navigation: { navigate: (route: string) => void };
}

export const Random: React.FC<{ route: any; navigation: Navigation }> = ({
	route,
	navigation,
}) => {
	/**
	 * const {someParam} = route.params;
	 * */

	/**
	 * navigation.setParams({someParams: changedValue}) => update params
	 */

	const onPressButton = (): void => {
		console.log("pressed");
	};

	return (
		<View style={styles.random}>
			<View style={styles.randomText}>
				<CustomText customStyle={styles.randomTextContent}>
					Click to get translation
				</CustomText>
			</View>
			<View style={styles.randomTile}>
				<Tile englishWord="toBuy" spanishWord="comprar" />
			</View>
			<View style={styles.randomButtons}>
				<CustomButton title="Previous" onPress={onPressButton} />
				<CustomButton title="Next" onPress={onPressButton} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	random: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	randomText: {
		flex: 1,
		justifyContent: "center",
	},
	randomTextContent: {
		fontSize: 30,
		fontWeight: "bold",
		letterSpacing: 3,
	},
	randomTile: {
		flex: 5,
	},
	randomButtons: {
		flex: 1,
		width: 350,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
